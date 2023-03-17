import { Slot } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ProtectedRouteProvider } from "../providers/ProtectedRouteProvider"
import { UserProvider } from "../providers/UserProvider"

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
}

export default function Root() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <ProtectedRouteProvider>
          <Slot />
        </ProtectedRouteProvider>
      </UserProvider>
    </SafeAreaProvider>
  )
}
