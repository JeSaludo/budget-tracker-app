import { type NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(
    {
      name: 'John Doe',
    },
    { status: 200 },
  );
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, username, password } = await req.json();

  // Perform your validation logic here
  if (!email || !username || !password) {
    return NextResponse.json({ status: 400, message: 'Invalid data' }, { status: 400 });
  }

  try {
    const createUser = await prisma.user.create({
      data: {
        email,
        username,
        password,
        firstName: 'John',
        lastName: 'Doe',
      },
    });

    return NextResponse.json({ createdAccount: createUser, message: 'ok' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { status: 500, message: 'Error creating user', error: (error as Error).message },
      { status: 500 },
    );
  }
}
