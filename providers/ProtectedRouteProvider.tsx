import { useRouter, useSegments } from "expo-router"
import { useEffect } from "react"
import { useUser } from "./UserProvider"

type Props = {
  children: React.ReactNode
}

export function ProtectedRouteProvider(props: Props) {
  const { children } = props

  const { user } = useUser()

  const router = useRouter()
  const segments = useSegments()

  const isAuthenticated = user !== undefined

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)"

    // If the user is not signed in and the initial segment is not anything in the auth group.
    if (!isAuthenticated && !inAuthGroup) {
      // Redirect to the sign-in page.
      router.replace("/sign-in")
    } else if (isAuthenticated && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/")
    }
  }, [router, segments, isAuthenticated])

  return <>{children}</>
}
