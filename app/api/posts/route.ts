import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(_: Request) {
  
  const posts = await prisma?.post.findMany();

  return NextResponse.json(posts);
}