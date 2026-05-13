import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

function createPrisma() {
  const url = process.env.DATABASE_URL ?? ''
  // Parse URL manually so %23 → # is handled correctly by new URL()
  const parsed = new URL(url)
  const pool = new Pool({
    host: parsed.hostname,
    port: Number(parsed.port) || 5432,
    database: parsed.pathname.replace(/^\//, ''),
    user: parsed.username,
    password: decodeURIComponent(parsed.password),
    ssl: { rejectUnauthorized: false },
  })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter } as any)
}

export const prisma = globalForPrisma.prisma ?? createPrisma()
globalForPrisma.prisma = prisma
