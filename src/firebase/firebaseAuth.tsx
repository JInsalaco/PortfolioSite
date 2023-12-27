import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react'
import { auth } from './firebaseConfig'
import {
  Auth,
  UserCredential,
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
  signIn: (email: string, password: string) => Promise<UserCredential>
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

  async function signIn(email: string, password: string): Promise<UserCredential> {
    setLoadingUser(true);
    return await signInWithEmailAndPassword(auth, email, password)
  }

  async function logOut(): Promise<void> {
    setLoadingUser(true);
    return signOut(auth);
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoadingUser(false);
    })
  }, [])

  if (loadingUser) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const values = {
    user,
    signIn,
    logOut,
    auth,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}