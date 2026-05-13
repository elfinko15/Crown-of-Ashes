import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { tier, days } = await req.json()
  if (!tier || !days || days < 1) {
    return NextResponse.json({ error: 'Ungültige Eingabe' }, { status: 400 })
  }

  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + Number(days))

  const membership = await prisma.membership.upsert({
    where: { userId: params.id },
    update: { tier, expiresAt },
    create: { userId: params.id, tier, expiresAt },
  })

  return NextResponse.json(membership)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    await prisma.membership.delete({ where: { userId: params.id } })
  } catch {
    // No membership to delete, ignore
  }

  return NextResponse.json({ ok: true })
}
