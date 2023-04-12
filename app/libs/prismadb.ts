import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
// for hot-reload next 13
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
