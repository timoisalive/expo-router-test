import { Button, View } from "react-native"
import { useUser } from "../../providers/UserProvider"

export default function SignIn() {
  const { setUser } = useUser()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Sign In"
        onPress={() => setUser({ username: "user-me" })}
      />
    </View>
  )
}
