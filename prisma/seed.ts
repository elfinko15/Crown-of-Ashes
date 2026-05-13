import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter } as any)

const BASIC_CODES = [
  'NFS-BASIC-A1B2C3', 'NFS-BASIC-D4E5F6', 'NFS-BASIC-G7H8I9',
  'NFS-BASIC-J0K1L2', 'NFS-BASIC-M3N4O5', 'NFS-BASIC-P6Q7R8',
  'NFS-BASIC-S9T0U1', 'NFS-BASIC-V2W3X4', 'NFS-BASIC-Y5Z6A7',
  'NFS-BASIC-B8C9D0',
]

const PRO_CODES = [
  'NFS-PRO-E1F2G3H4', 'NFS-PRO-I5J6K7L8', 'NFS-PRO-M9N0O1P2',
  'NFS-PRO-Q3R4S5T6', 'NFS-PRO-U7V8W9X0', 'NFS-PRO-Y1Z2A3B4',
  'NFS-PRO-C5D6E7F8', 'NFS-PRO-G9H0I1J2', 'NFS-PRO-K3L4M5N6',
  'NFS-PRO-O7P8Q9R0',
]

async function main() {
  for (const code of BASIC_CODES) {
    await prisma.redeemCode.upsert({
      where: { code },
      update: {},
      create: { code, tier: 'basic', days: 30 },
    })
  }
  for (const code of PRO_CODES) {
    await prisma.redeemCode.upsert({
      where: { code },
      update: {},
      create: { code, tier: 'pro', days: 30 },
    })
  }
  console.log('Seeded 20 redeem codes (10 basic, 10 pro)')
}

main().catch(console.error).finally(() => prisma.$disconnect())
