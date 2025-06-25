import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Admin from '@/models/Admin';

export async function GET() {
  try {
    await connectDB();
    
    let admin = await Admin.findOne();
    if (!admin) {
      admin = await Admin.create({
        name: 'Admin Name',
        title: 'Site Administrator',
        imageUrl: '/default-profile.png',
        details: 'Initial details.',
        description: 'Initial description.',
      });
    }
    return NextResponse.json(admin);
    
  } catch (err) {
    console.error('Error in admin route:', err);
    return NextResponse.json(
      { error: 'Database error', details: err.message }, 
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  const data = await request.json();
  console.log(data)
  try {
    await connectDB();
    

    if (!data || Object.keys(data).length === 0) {
      return NextResponse.json(
        { error: 'No update data provided' }, 
        { status: 400 }
      );
    }

    const admin = await Admin.findOneAndUpdate(
      {}, 
      data, 
      { 
        new: true, 
        upsert: true, 
        runValidators: true,
        setDefaultsOnInsert: true 
      }
    );
    
    return NextResponse.json(admin);
    
  } catch (error) {
    console.error("Error updating admin:", error);
    
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors }, 
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Database error', details: error.message }, 
      { status: 500 }
    );
  }
}