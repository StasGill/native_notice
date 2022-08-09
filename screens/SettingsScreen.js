import { Text, View } from "react-native";
import { Buttons } from "../components/form/Buttons";

export function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!!!!</Text>
      <Buttons title={"Log out"} onPress={() => console.log("333")} />
    </View>
  );
}
