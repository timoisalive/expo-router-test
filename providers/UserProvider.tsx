import { createContext, ReactNode, useContext, useState } from "react"

type User = {
  username: string
}

type UserContextDefinition = {
  setUser: (user: User | undefined) => void
  user: User | undefined
}

const UserContext = createContext<UserContextDefinition | null>(null)

type Props = {
  children: ReactNode
}

export function UserProvider(props: Props) {
  const { children } = props

  const [user, setUser] = useState<User | undefined>(undefined)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser was used outside of a UserProvider")
  }
  return context
}
