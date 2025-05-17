import { NextResponse } from 'next/server';

// This is a simple example API route
export async function GET() {
  return NextResponse.json({ 
    message: 'BuildMart API is running',
    version: '1.0.0'
  });
}