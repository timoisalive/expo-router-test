import { Link } from "expo-router"
import { ScrollView, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function Screen() {
  const insets = useSafeAreaInsets()

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingTop: 24 }}
    >
      <Text>Home Screen</Text>
      {/* <Link
        href="/latest"
        style={{
          padding: 12,
        }}
      >
        <Text>Latest</Text>
      </Link>

      <Link
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
