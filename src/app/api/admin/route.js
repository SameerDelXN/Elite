import { NextResponse } from 'next/server';

// Temporary in-memory storage for testing
let adminData = {
  name: 'Admin User',
  title: 'Administrator',
  imageUrl: '',
  details: 'Admin details',
  description: 'Admin description'
};

export async function GET() {
  try {
    console.log('GET admin data from memory');
    return NextResponse.json(adminData);
  } catch (error) {
    console.error('Error fetching admin:', error);
    return NextResponse.json(
      { error: 'Failed to fetch admin data', details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    console.log('PUT admin data to memory');
    const data = await request.json();
    console.log('Received update data:', data);

    // Validate required fields
    const requiredFields = ['name', 'title', 'imageUrl', 'details', 'description'];
    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === '') {
        console.log(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Update the in-memory data
    adminData = { ...adminData, ...data };
    console.log('Admin data updated in memory:', adminData);
    
    // Return the updated admin data
    return NextResponse.json({
      success: true,
      data: adminData,
      message: 'Admin profile updated successfully'
    });
  } catch (error) {
    console.error('Error updating admin:', error);
    
    return NextResponse.json(
      { error: 'Failed to update admin data', details: error.message },
      { status: 500 }
    );
  }
} 