import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, TasksScreen } from "./ListsScreen";
import { SignInScreen } from "./SignInScreen";
import { SettingsScreen } from "./SettingsScreen";
import { SignUpScreen } from "./SignUpScreen";
import { useSelector } from "react-redux";
import Tabs from "../components/tabs/Tabs";

const Stack = createStackNavigator();

export default function MainScreen() {
  const { authData } = useSelector((state) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Homes"
    >
      {authData?.token ? (
        <>
          <Stack.Screen name="Homes" component={Tabs} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
