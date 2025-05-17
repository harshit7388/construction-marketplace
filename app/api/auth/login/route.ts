import { NextResponse } from 'next/server';

// This would connect to the MongoDB database in a real application
export async function POST(req: Request) {
  try {
    const { phone, password } = await req.json();
    
    // Validate input
    if (!phone || !password) {
      return NextResponse.json(
        { error: 'Missing phone or password' },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Look up the user in the database
    // 2. Compare the password hash
    // 3. Generate JWT token if valid
    
    // For demo purposes, check against hardcoded values
    if (phone === '1234567890' && password === 'password') {
      return NextResponse.json({
        success: true,
        message: 'Login successful',
        user: {
          id: 'user-1',
          name: 'Demo User',
          phone,
          // Don't return sensitive information like password
        }
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}