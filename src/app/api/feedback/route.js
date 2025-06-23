import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Feedback from '@/app/models/Feedback';

export async function GET() {
  try {
    await connectDB();
    const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
    return NextResponse.json(feedbacks);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const feedback = await Feedback.create(body);
    return NextResponse.json(feedback, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 