import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react'
import { auth } from './firebaseConfig'
import {
  Auth,
  User,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export interface AuthProviderProps {
  children?: ReactNode
}

export interface AuthContextModel {
  auth: Auth
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  logOut: () => Promise<void>
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel,
)

export function useAuth(): AuthContextModel {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)
  const [loadingUser, setLoadingUser] = useState(true);

  async function signIn(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function logOut(): Promise<void> {
    return signOut(auth);
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoadingUser(false);
    })
  }, [])

  const values = {
    user,
    signIn,
    logOut,
    auth,
  }
  return <AuthContext.Provider value={values}>{!loadingUser && children}</AuthContext.Provider>
}