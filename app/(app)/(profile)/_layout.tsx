import { Stack, useSearchParams } from "expo-router"

export default function Layout() {
  const { username } = useSearchParams()

  console.log("(profile)/_layout", username)

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
