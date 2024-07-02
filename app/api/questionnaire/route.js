// app/api/questionnaire/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/server/config/db';
import Questionnaire from '@/server/models/Questionnaire';

connectDB();

export async function POST(req) {
  const formData = await req.json();
  const newQuestionnaire = new Questionnaire(formData);
  await newQuestionnaire.save();

  return NextResponse.json({ success: true });
}

