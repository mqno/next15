import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import dbConnect from '@/utils/db';
import Location from '@/models/Location';
import User from '@/models/User';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    const { userId, coordinates } = data;

    // Create new location
    const location = await Location.create({
      user: userId,
      coordinates,
    });

    // Add location to user's locations array
    await User.findByIdAndUpdate(
      userId,
      { $push: { locations: location._id } },
      { new: true }
    );

    return NextResponse.json(location);
  } catch (err: Error | unknown) {
    console.error('Error in POST /api/location:', err instanceof Error ? err.message : 'Unknown error');
    return NextResponse.json({ error: 'Error creating location' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const locations = await Location.find({ user: userId });
    return NextResponse.json(locations);
  } catch (err: Error | unknown) {
    console.error('Error in GET /api/location:', err instanceof Error ? err.message : 'Unknown error');
    return NextResponse.json({ error: 'Error fetching locations' }, { status: 500 });
  }
}