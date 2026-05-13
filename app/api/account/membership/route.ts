import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'Nicht angemeldet.' }, { status: 401 })

  const userId = (session.user as any).id
  const membership = await prisma.membership.findUnique({ where: { userId } })

  if (!membership || membership.expiresAt < new Date()) {
    return NextResponse.json({ active: false })
  }

  return NextResponse.json({
    active: true,
    tier: membership.tier,
    expiresAt: membership.expiresAt,
  })
}
