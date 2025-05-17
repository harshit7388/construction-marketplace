'use client';

import { useContext } from 'react';
import { createContext } from 'react';

// Re-export the useAuth hook from the auth provider
// This is just a convenience to avoid imports from components/providers/auth-provider
export { useAuth } from '@/components/providers/auth-provider';