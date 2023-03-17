import { Link, Tabs } from "expo-router"
import { Platform, Pressable } from "react-native"
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
          // href: `/(profile)/${user?.username}`,

          // Seems like we need a custom button instead of just the href in order for the params to work:
          tabBarButton: (allProps) => {
            const { onPress, ...props } = allProps // Remove `onPress` from props - it throws a navigation error

            const children =
              Platform.OS === "web" ? (
                props.children
              ) : (
                <Pressable>{props.children}</Pressable>
              )

            return (
              <Link
                {...props}
                asChild={Platform.OS !== "web"}
                href={`/(profile)/${user?.username}`}
                style={[{ display: "flex" }, props.style]}
              >
                {children}
              </Link>
            )
          },
          title: "Profile",
        }}
      />
    </Tabs>
  )
}
