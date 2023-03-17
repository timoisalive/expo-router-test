import { Tabs } from "expo-router"
import { useUser } from "../../providers/UserProvider"

export default function Layout() {
  const { user } = useUser()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="(profile)"
        options={{
          href: {
            pathname: "/(profile)/[username]",
            params: {
              username: user?.username,
            },
          },
          title: "Profile",
        }}
      />
    </Tabs>
  )
}
