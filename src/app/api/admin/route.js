import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Admin from '@/models/Admin';

export async function GET() {
  try {
    await connectDB();
    const admin = await Admin.findOne();
    return NextResponse.json(admin || {});
  } catch (error) {
    console.error('Error fetching admin:', error);
    return NextResponse.json(
      { error: 'Failed to fetch admin data' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const data = await request.json();

    // Find the admin document or create a new one
    let admin = await Admin.findOne();
    if (!admin) {
      admin = new Admin(data);
    } else {
      Object.assign(admin, data);
    }

    await admin.save();
    return NextResponse.json(admin);
  } catch (error) {
    console.error('Error updating admin:', error);
    return NextResponse.json(
      { error: 'Failed to update admin data' },
      { status: 500 }
    );
  }
} 