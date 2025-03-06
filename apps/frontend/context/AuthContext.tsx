import { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
  user: string | null
  signIn: (username: string, password: string) => boolean
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null)

  const mockUsers = [{ username: 'admin', password: 'password' }]

  const signIn = (username: string, password: string) => {
    const validUser = mockUsers.find((u) => u.username === username && u.password === password)
    if (validUser) {
      setUser(username)
      return true
    }
    return false
  }

  const signOut = () => setUser(null)

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
