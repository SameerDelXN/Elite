import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Admin from '@/models/Admin';

export async function GET() {
  try {
    await dbConnect();
  } catch (err) {
    console.error('DB connection error (GET):', err);
    return NextResponse.json({ error: 'DB connection error', details: err.message }, { status: 500 });
  }
  try {
    const admin = await Admin.findOne();
    if (!admin) {
      // If no admin, create a default one
      const defaultAdmin = await Admin.create({
        name: 'Admin Name',
        title: 'Site Administrator',
        imageUrl: '/default-profile.png',
        details: 'Initial details.',
        description: 'Initial description.',
      });
      return NextResponse.json(defaultAdmin);
    }
    return NextResponse.json(admin);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch admin data' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    await dbConnect();
  } catch (err) {
    console.error('DB connection error (PUT):', err);
    return NextResponse.json({ error: 'DB connection error', details: err.message }, { status: 500 });
  }
  try {
    const data = await request.json();

    if (!data || Object.keys(data).length === 0) {
      return NextResponse.json({ error: 'No update data provided' }, { status: 400 });
    }

    const admin = await Admin.findOneAndUpdate({}, data, { new: true, upsert: true, runValidators: true });
    
    if (!admin) {
        return NextResponse.json({ error: 'Failed to update or create admin profile' }, { status: 404 });
    }
    
    return NextResponse.json(admin);
  } catch (error) {
    console.error("Error updating admin:", error);

    if (error.name === 'ValidationError') {
      return NextResponse.json({ error: 'Validation failed', details: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: 'Failed to update admin data', details: error.message }, { status: 500 });
  }
} 