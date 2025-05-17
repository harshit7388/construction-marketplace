import { NextResponse } from 'next/server';

// This would connect to the MongoDB database in a real application
export async function POST(req: Request) {
  try {
    const { name, phone, password } = await req.json();
    
    // Validate input
    if (!name || !phone || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Create a new user in the database
    // 4. Generate JWT token
    
    // For demo purposes, return a mock response
    return NextResponse.json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: `user-${Date.now()}`,
        name,
        phone,
        // Don't return sensitive information like password
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}