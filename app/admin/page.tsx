'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'

// ─── Types ───────────────────────────────────────────────────────────────────

interface AdminUser {
  id: string
  name: string
  email: string
  role: string
  createdAt: string
  membership: { tier: string; expiresAt: string } | null
}

interface Stats {
  totalUsers: number
  activeMembers: number
  basicCount: number
  proCount: number
  newThisMonth: number
  totalCodes: number
  usedCodes: number
}

interface RedeemCode {
  id: string
  code: string
  tier: string
  days: number
  usedById: string | null
  usedAt: string | null
  createdAt: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function daysLeft(expiresAt: string): number {
  return Math.max(0, Math.ceil((new Date(expiresAt).getTime() - Date.now()) / 86400000))
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

// ─── Small atoms ─────────────────────────────────────────────────────────────

function Badge({ label, variant }: { label: string; variant: 'admin' | 'user' | 'pro' | 'basic' | 'none' | 'used' | 'free' }) {
  const cls: Record<string, string> = {
    admin: 'bg-white text-black',
    user:  'bg-white/10 text-white/50',
    pro:   'bg-white text-black',
    basic: 'bg-white/15 text-white/70',
    none:  'bg-white/5 text-white/30',
    used:  'bg-white/10 text-white/40',
    free:  'bg-white text-black',
  }
  return (
    <span className={`inline-block px-2 py-0.5 text-[10px] font-bold font-barlow uppercase tracking-wider rounded ${cls[variant]}`}>
      {label}
    </span>
  )
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-[#111] border border-white/10 p-5">
      <p className="text-white/40 text-xs uppercase tracking-widest font-barlow mb-2">{label}</p>
      <p className="font-barlow font-bold text-3xl text-white">{value}</p>
      {sub && <p className="text-white/30 text-xs mt-1">{sub}</p>}
    </div>
  )
}

// ─── Edit Modal ───────────────────────────────────────────────────────────────

function EditModal({ user, onClose, onSaved }: {
  user: AdminUser
  onClose: () => void
  onSaved: (u: AdminUser) => void
}) {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [role, setRole] = useState(user.role)
  const [tier, setTier] = useState(user.membership?.tier ?? 'none')
  const [days, setDays] = useState(30)
  const [customDays, setCustomDays] = useState('')
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [err, setErr] = useState('')

  const effectiveDays = days === -1 ? parseInt(customDays) || 0 : days

  async function handleSave() {
    setSaving(true)
    setErr('')
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role }),
      })
      if (!res.ok) throw new Error((await res.json()).error)

      if (tier === 'none') {
        await fetch(`/api/admin/users/${user.id}/membership`, { method: 'DELETE' })
      } else {
        await fetch(`/api/admin/users/${user.id}/membership`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tier, days: effectiveDays }),
        })
      }

      const updated = await res.json()
      if (tier !== 'none') {
        const expD = new Date()
        expD.setDate(expD.getDate() + effectiveDays)
        updated.membership = { tier, expiresAt: expD.toISOString() }
      } else {
        updated.membership = null
      }
      onSaved(updated)
    } catch (e: any) {
      setErr(e.message ?? 'Fehler beim Speichern')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    setDeleting(true)
    const res = await fetch(`/api/admin/users/${user.id}`, { method: 'DELETE' })
    if (res.ok) {
      onSaved({ ...user, id: '__deleted__' })
    } else {
      const j = await res.json()
      setErr(j.error ?? 'Fehler beim Löschen')
      setDeleting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="w-full max-w-md bg-[#111] border border-white/15 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="font-barlow font-bold text-white text-lg uppercase tracking-wider">User bearbeiten</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors text-xl leading-none">×</button>
        </div>

        <div className="px-6 py-5 space-y-4">
          {err && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 px-3 py-2">{err}</p>}

          <div>
            <label className="block text-white/40 text-xs uppercase tracking-widest mb-1.5">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} className="nf-input" />
          </div>
          <div>
            <label className="block text-white/40 text-xs uppercase tracking-widest mb-1.5">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="nf-input" type="email" />
          </div>

          <div>
            <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Rolle</label>
            <div className="flex gap-2">
              {(['user', 'admin'] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 py-2 text-sm font-bold font-barlow uppercase transition-colors border ${
                    role === r ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/15 hover:border-white/30'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Mitgliedschaft</label>
            <div className="flex gap-2 flex-wrap mb-3">
              {(['none', 'basic', 'pro'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTier(t)}
                  className={`px-4 py-2 text-sm font-bold font-barlow uppercase transition-colors border ${
                    tier === t ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/15 hover:border-white/30'
                  }`}
                >
                  {t === 'none' ? 'Keine' : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
            {tier !== 'none' && (
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Laufzeit</label>
                <div className="flex gap-2 flex-wrap">
                  {([30, 90, 365, -1] as const).map(d => (
                    <button
                      key={d}
                      onClick={() => setDays(d)}
                      className={`px-3 py-1.5 text-xs font-bold font-barlow transition-colors border ${
                        days === d ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/15 hover:border-white/30'
                      }`}
                    >
                      {d === -1 ? 'Benutzerdefiniert' : `${d} Tage`}
                    </button>
                  ))}
                </div>
                {days === -1 && (
                  <input
                    type="number"
                    placeholder="Anzahl Tage"
                    value={customDays}
                    onChange={e => setCustomDays(e.target.value)}
                    className="nf-input mt-2"
                    min={1}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex items-center justify-between gap-3">
          <div>
            {!confirmDelete ? (
              <button
                onClick={() => setConfirmDelete(true)}
                className="text-red-400/70 hover:text-red-400 text-sm transition-colors"
              >
                Account löschen
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-red-400 text-xs">Sicher?</span>
                <button onClick={handleDelete} disabled={deleting} className="text-red-400 text-xs font-bold underline">
                  {deleting ? '...' : 'Ja, löschen'}
                </button>
                <button onClick={() => setConfirmDelete(false)} className="text-white/40 text-xs">Abbrechen</button>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button onClick={onClose} className="btn-secondary text-sm px-4 py-2">Abbrechen</button>
            <button onClick={handleSave} disabled={saving} className="btn-primary text-sm px-5 py-2">
              {saving ? 'Speichern...' : 'Speichern'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const { data: session } = useSession()
  const [tab, setTab] = useState<'users' | 'codes'>('users')

  // Users state
  const [users, setUsers] = useState<AdminUser[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [loadingUsers, setLoadingUsers] = useState(true)
  const [editUser, setEditUser] = useState<AdminUser | null>(null)

  // Stats state
  const [stats, setStats] = useState<Stats | null>(null)

  // Codes state
  const [codes, setCodes] = useState<RedeemCode[]>([])
  const [loadingCodes, setLoadingCodes] = useState(false)
  const [newTier, setNewTier] = useState('basic')
  const [newDays, setNewDays] = useState(30)
  const [newCount, setNewCount] = useState(1)
  const [generating, setGenerating] = useState(false)
  const [generatedCodes, setGeneratedCodes] = useState<string[]>([])

  const LIMIT = 25

  const loadStats = useCallback(async () => {
    const res = await fetch('/api/admin/stats')
    if (res.ok) setStats(await res.json())
  }, [])

  const loadUsers = useCallback(async () => {
    setLoadingUsers(true)
    const res = await fetch(`/api/admin/users?search=${encodeURIComponent(search)}&page=${page}&limit=${LIMIT}`)
    if (res.ok) {
      const j = await res.json()
      setUsers(j.users)
      setTotal(j.total)
    }
    setLoadingUsers(false)
  }, [search, page])

  const loadCodes = useCallback(async () => {
    setLoadingCodes(true)
    const res = await fetch('/api/admin/codes')
    if (res.ok) setCodes((await res.json()).codes)
    setLoadingCodes(false)
  }, [])

  useEffect(() => { loadStats() }, [loadStats])
  useEffect(() => { loadUsers() }, [loadUsers])
  useEffect(() => { if (tab === 'codes') loadCodes() }, [tab, loadCodes])

  function handleUserSaved(updated: AdminUser) {
    setEditUser(null)
    if (updated.id === '__deleted__') {
      setUsers(prev => prev.filter(u => u.id !== editUser?.id))
      setTotal(t => t - 1)
    } else {
      setUsers(prev => prev.map(u => u.id === updated.id ? updated : u))
    }
    loadStats()
  }

  async function handleGenerateCodes() {
    setGenerating(true)
    setGeneratedCodes([])
    const res = await fetch('/api/admin/codes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tier: newTier, days: newDays, count: newCount }),
    })
    if (res.ok) {
      const j = await res.json()
      setGeneratedCodes(j.codes.map((c: RedeemCode) => c.code))
      loadCodes()
      loadStats()
    }
    setGenerating(false)
  }

  function copyAll(codeList: string[]) {
    navigator.clipboard.writeText(codeList.join('\n'))
  }

  const totalPages = Math.ceil(total / LIMIT)

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Top bar */}
      <div className="bg-[#111] border-b border-white/10 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-barlow font-bold text-white text-xl uppercase tracking-widest">Admin Panel</span>
            <span className="text-white/20">|</span>
            <span className="text-white/40 text-sm">Nordic Forge Studios</span>
          </div>
          <span className="text-white/30 text-xs">{(session?.user as any)?.email}</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/10 border border-white/10 mb-8">
          <StatCard label="Gesamt User" value={stats?.totalUsers ?? '—'} />
          <StatCard label="Aktive Members" value={stats?.activeMembers ?? '—'} />
          <StatCard label="Basic" value={stats?.basicCount ?? '—'} />
          <StatCard label="Pro" value={stats?.proCount ?? '—'} />
          <StatCard label="Neu (30 Tage)" value={stats?.newThisMonth ?? '—'} />
          <StatCard label="Codes gesamt" value={stats?.totalCodes ?? '—'} />
          <StatCard label="Codes verwendet" value={stats?.usedCodes ?? '—'} />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-8">
          {(['users', 'codes'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-3 text-sm font-bold font-barlow uppercase tracking-wider border-b-2 transition-colors -mb-px ${
                tab === t ? 'border-white text-white' : 'border-transparent text-white/35 hover:text-white/60'
              }`}
            >
              {t === 'users' ? `User (${total})` : 'Redeem Codes'}
            </button>
          ))}
        </div>

        {/* ── Users Tab ──────────────────────────────────────── */}
        {tab === 'users' && (
          <div>
            {/* Search */}
            <div className="flex gap-3 mb-5">
              <div className="relative flex-1 max-w-sm">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  value={search}
                  onChange={e => { setSearch(e.target.value); setPage(1) }}
                  placeholder="Name oder E-Mail suchen..."
                  className="nf-input pl-10"
                />
              </div>
              <button onClick={loadUsers} className="btn-secondary px-4 py-2 text-sm">
                Aktualisieren
              </button>
            </div>

            {/* Table */}
            <div className="border border-white/10 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#111] border-b border-white/10">
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Name</th>
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Email</th>
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Rolle</th>
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Mitgliedschaft</th>
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Registriert</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {loadingUsers ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-10 text-center text-white/30 text-sm">Lädt...</td>
                    </tr>
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-10 text-center text-white/30 text-sm">Keine User gefunden</td>
                    </tr>
                  ) : users.map((u, i) => (
                    <tr
                      key={u.id}
                      className={`border-b border-white/[0.06] hover:bg-white/[0.03] transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}
                    >
                      <td className="px-4 py-3.5 text-white font-medium">{u.name}</td>
                      <td className="px-4 py-3.5 text-white/50">{u.email}</td>
                      <td className="px-4 py-3.5">
                        <Badge
                          label={u.role === 'admin' ? 'Admin' : 'User'}
                          variant={u.role === 'admin' ? 'admin' : 'user'}
                        />
                      </td>
                      <td className="px-4 py-3.5">
                        {u.membership ? (
                          <div className="flex items-center gap-2">
                            <Badge
                              label={u.membership.tier.toUpperCase()}
                              variant={u.membership.tier === 'pro' ? 'pro' : 'basic'}
                            />
                            <span className="text-white/30 text-xs">{daysLeft(u.membership.expiresAt)}d</span>
                          </div>
                        ) : (
                          <Badge label="Keine" variant="none" />
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-white/35 text-xs">{fmtDate(u.createdAt)}</td>
                      <td className="px-4 py-3.5 text-right">
                        <button
                          onClick={() => setEditUser(u)}
                          className="px-3 py-1 text-xs font-bold font-barlow text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-colors uppercase"
                        >
                          Bearbeiten
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4">
                <p className="text-white/30 text-xs">{total} User insgesamt</p>
                <div className="flex gap-1">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-3 py-1.5 text-xs font-bold font-barlow border border-white/15 text-white/50 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Zurück
                  </button>
                  <span className="px-3 py-1.5 text-xs text-white/40">{page} / {totalPages}</span>
                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-3 py-1.5 text-xs font-bold font-barlow border border-white/15 text-white/50 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Weiter →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Codes Tab ──────────────────────────────────────── */}
        {tab === 'codes' && (
          <div>
            {/* Generator */}
            <div className="bg-[#111] border border-white/10 p-6 mb-6">
              <h3 className="font-barlow font-bold text-white uppercase tracking-wider mb-5">Codes generieren</h3>
              <div className="flex flex-wrap gap-4 items-end">
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest mb-1.5">Tier</label>
                  <div className="flex gap-2">
                    {['basic', 'pro'].map(t => (
                      <button
                        key={t}
                        onClick={() => setNewTier(t)}
                        className={`px-4 py-2 text-sm font-bold font-barlow uppercase border transition-colors ${
                          newTier === t ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/15 hover:border-white/30'
                        }`}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest mb-1.5">Laufzeit</label>
                  <div className="flex gap-2">
                    {[30, 90, 365].map(d => (
                      <button
                        key={d}
                        onClick={() => setNewDays(d)}
                        className={`px-3 py-2 text-sm font-bold font-barlow border transition-colors ${
                          newDays === d ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/15 hover:border-white/30'
                        }`}
                      >
                        {d}d
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-widest mb-1.5">Anzahl</label>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={newCount}
                    onChange={e => setNewCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="nf-input w-20"
                  />
                </div>
                <button
                  onClick={handleGenerateCodes}
                  disabled={generating}
                  className="btn-primary px-6 py-2.5 text-sm"
                >
                  {generating ? 'Generiert...' : 'Generieren'}
                </button>
              </div>

              {generatedCodes.length > 0 && (
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white/50 text-xs uppercase tracking-widest">{generatedCodes.length} Code{generatedCodes.length > 1 ? 's' : ''} erstellt</p>
                    <button onClick={() => copyAll(generatedCodes)} className="text-white/40 hover:text-white text-xs transition-colors">
                      Alle kopieren
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {generatedCodes.map(c => (
                      <button
                        key={c}
                        onClick={() => navigator.clipboard.writeText(c)}
                        title="Klicken zum Kopieren"
                        className="px-3 py-1.5 bg-white text-black text-xs font-mono font-bold hover:bg-white/90 transition-colors"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Codes table */}
            <div className="border border-white/10 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#111] border-b border-white/10">
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Code</th>
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Tier</th>
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Laufzeit</th>
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Status</th>
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Verwendet am</th>
                    <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-barlow font-bold">Erstellt</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingCodes ? (
                    <tr><td colSpan={6} className="px-4 py-10 text-center text-white/30">Lädt...</td></tr>
                  ) : codes.length === 0 ? (
                    <tr><td colSpan={6} className="px-4 py-10 text-center text-white/30">Keine Codes vorhanden</td></tr>
                  ) : codes.map((c, i) => (
                    <tr key={c.id} className={`border-b border-white/[0.06] hover:bg-white/[0.03] transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                      <td className="px-4 py-3 font-mono text-xs text-white">{c.code}</td>
                      <td className="px-4 py-3">
                        <Badge label={c.tier.toUpperCase()} variant={c.tier === 'pro' ? 'pro' : 'basic'} />
                      </td>
                      <td className="px-4 py-3 text-white/50 text-xs">{c.days} Tage</td>
                      <td className="px-4 py-3">
                        <Badge label={c.usedById ? 'Verwendet' : 'Frei'} variant={c.usedById ? 'used' : 'free'} />
                      </td>
                      <td className="px-4 py-3 text-white/35 text-xs">{c.usedAt ? fmtDate(c.usedAt) : '—'}</td>
                      <td className="px-4 py-3 text-white/35 text-xs">{fmtDate(c.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editUser && (
        <EditModal user={editUser} onClose={() => setEditUser(null)} onSaved={handleUserSaved} />
      )}
    </div>
  )
}
