import clientPromise from '@/lib/mongodb';

export async function GET(request, { params }) {
  try {
    // Connect to the MongoDB client
    const client = await clientPromise;
    const db = client.db('resumeDetails');
    const collection = db.collection('resumeDetails');
    
    console.log({ params: params.id });
    
    // Fetch the resume using the `resumeId` from the URL parameters
    const resume = await collection.findOne({ resumeId: params.id });

    // Check if the resume was found
    if (!resume) {
      return new Response(JSON.stringify({ message: 'Resume Not Found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Return the found resume in the response
    return new Response(JSON.stringify(resume), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching resume:', error); // Log error details for debugging
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
