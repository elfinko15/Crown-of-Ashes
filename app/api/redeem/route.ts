import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: 'Nicht angemeldet.' }, { status: 401 })
  }

  const { code } = await req.json()
  if (!code) return NextResponse.json({ error: 'Kein Code angegeben.' }, { status: 400 })

  const redeemCode = await prisma.redeemCode.findUnique({ where: { code: code.trim().toUpperCase() } })

  if (!redeemCode) return NextResponse.json({ error: 'Ungültiger Code.' }, { status: 404 })
  if (redeemCode.usedById) return NextResponse.json({ error: 'Dieser Code wurde bereits eingelöst.' }, { status: 409 })

  const userId = (session.user as any).id
  const now = new Date()

  // Check existing membership and extend if still active
  const existing = await prisma.membership.findUnique({ where: { userId } })
  const baseDate = existing && existing.expiresAt > now ? existing.expiresAt : now
  const expiresAt = new Date(baseDate.getTime() + redeemCode.days * 86400000)

  await prisma.$transaction([
    prisma.redeemCode.update({
      where: { code: code.trim().toUpperCase() },
      data: { usedById: userId, usedAt: now },
    }),
    existing
      ? prisma.membership.update({ where: { userId }, data: { tier: redeemCode.tier, expiresAt } })
      : prisma.membership.create({ data: { userId, tier: redeemCode.tier, expiresAt } }),
  ])

  return NextResponse.json({ ok: true, tier: redeemCode.tier, expiresAt })
}
