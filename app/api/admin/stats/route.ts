import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const now = new Date()
  const monthAgo = new Date()
  monthAgo.setMonth(monthAgo.getMonth() - 1)

  const [totalUsers, memberships, newThisMonth, totalCodes, usedCodes] = await Promise.all([
    prisma.user.count(),
    prisma.membership.findMany({ select: { tier: true, expiresAt: true } }),
    prisma.user.count({ where: { createdAt: { gte: monthAgo } } }),
    prisma.redeemCode.count(),
    prisma.redeemCode.count({ where: { usedById: { not: null } } }),
  ])

  const activeMemberships = memberships.filter(m => new Date(m.expiresAt) > now)
  const basicCount = activeMemberships.filter(m => m.tier === 'basic').length
  const proCount = activeMemberships.filter(m => m.tier === 'pro').length

  return NextResponse.json({
    totalUsers,
    activeMembers: activeMemberships.length,
    basicCount,
    proCount,
    newThisMonth,
    totalCodes,
    usedCodes,
  })
}
