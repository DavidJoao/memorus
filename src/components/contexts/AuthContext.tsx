'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

interface User {

}

interface AuthContextType {
    user: {} | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

