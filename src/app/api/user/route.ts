import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import dbConnect from '@/utils/db';
import User from '@/models/User';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    const { name, email, password } = data;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      locations: []
    });

    // Remove password from response
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      locations: user.locations,
    };

    return NextResponse.json(userResponse);
  } catch (err: Error | unknown) {
    console.error('Error in POST /api/user:', err instanceof Error ? err.message : 'Unknown error');
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const email = searchParams.get('email');

    if (email) {
      const user = await User.findOne({ email }).select('-password');
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      return NextResponse.json(user);
    }

    if (userId) {
      const user = await User.findById(userId).select('-password').populate('locations');
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      return NextResponse.json(user);
    }

    const users = await User.find({}).select('-password');
    return NextResponse.json(users);
  } catch (err: Error | unknown) {
    console.error('Error in GET /api/user:', err instanceof Error ? err.message : 'Unknown error');
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}