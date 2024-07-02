// app/api/signup/route.js old 
import { NextResponse } from 'next/server';
import connectDB from '@/server/config/db';
import User from '@/server/models/User';

connectDB();

export async function POST(req) {
  const { email, password } = await req.json();
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json({ userExists: true });
  }

  const newUser = new User({ email, password });
  await newUser.save();

  return NextResponse.json({ userExists: false });
}


