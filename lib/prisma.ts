import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

declare global {
  // eslint-disable-next-line no-var
  var _prismaInstance: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL environment variable is not set')
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

// Lazy proxy — module can be imported without throwing.
// The error only surfaces when a DB method is actually called (in API routes).
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop: string | symbol) {
    if (!global._prismaInstance) {
      global._prismaInstance = createPrismaClient()
    }
    return Reflect.get(global._prismaInstance, prop)
  },
})
