import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const codes = await prisma.redeemCode.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
  })

  return NextResponse.json({ codes })
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { tier, days, count = 1 } = await req.json()
  if (!tier || !days || count < 1 || count > 50) {
    return NextResponse.json({ error: 'Ungültige Eingabe' }, { status: 400 })
  }

  const created = await Promise.all(
    Array.from({ length: count }, () =>
      prisma.redeemCode.create({
        data: {
          code: 'NFS-' + crypto.randomBytes(4).toString('hex').toUpperCase(),
          tier,
          days,
        },
      })
    )
  )

  return NextResponse.json({ codes: created }, { status: 201 })
}
