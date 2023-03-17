import { Stack, useSearchParams } from "expo-router"

export default function Layout() {
  const { username } = useSearchParams()

  return (
    <Stack>
      <Stack.Screen
        name="[username]"
        options={{
          title: username,
        }}
      />
    </Stack>
  )
}
