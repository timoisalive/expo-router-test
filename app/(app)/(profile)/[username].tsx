import { Link, useLocalSearchParams } from "expo-router"
import { useMemo } from "react"
import { ScrollView, Text } from "react-native"

export default function Screen() {
  const { username } = useLocalSearchParams()

  console.log("[username]", username)

  const randomUsername = useMemo(
    () => `user-${Math.floor(Math.random() * 1000)}`,
    []
  )

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingTop: 48 }}
    >
      <Link
        href={{
          pathname: "/[username]",
          params: { username: randomUsername },
        }}
      >
        <Text>{`Link to ${randomUsername}`}</Text>
      </Link>

      {/* <Link
        href="/popular"
        style={{
          marginTop: 18,
          padding: 12,
        }}
      >
        <Text>Popular</Text>
      </Link> */}
    </ScrollView>
  )
}
