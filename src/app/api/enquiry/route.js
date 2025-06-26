import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { db } = await connectToDatabase();
    const enquiry = {
      ...req.body,
      createdAt: new Date(),
      status: 'new'
    };

    const result = await db.collection('enquiries').insertOne(enquiry);
    
    return res.status(201).json({
      message: 'Enquiry submitted successfully',
      id: result.insertedId
    });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return res.status(500).json({ message: 'Error submitting enquiry' });
  }
}