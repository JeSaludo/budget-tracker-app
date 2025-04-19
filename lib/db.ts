import { PrismaClient } from '@/prisma/generated/prisma/client';

declare global {
  var prismaClient: PrismaClient | undefined;
}

const prisma: PrismaClient = global.prismaClient || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prismaClient = prisma;
}

async function handlePrismaDisconnect() {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.log('Error disconnecting Prisma: ', error);
  }
}

if (process.env.NODE_ENV === 'production') {
  process.on('SIGINT', handlePrismaDisconnect);
  process.on('SIGTERM', handlePrismaDisconnect);
}

export default prisma;
