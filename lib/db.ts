import { PrismaClient } from '@prisma/client';
import { compare, hash } from 'bcryptjs';

const prisma = new PrismaClient();

export default prisma;