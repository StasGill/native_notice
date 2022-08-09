import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "../components/tabs/Tabs";
import { getValueFor } from "../helpers/secureStore";
import { useEffect } from "react";
import { localSignIn } from "../store/actions/auth";
import { TasksScreen } from "../screens/TasksScreen";

const Stack = createStackNavigator();

export default function MainStack() {
  const { authData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getValueFor("auth").then((data) => {
      const parsedData = data && JSON.parse(data);

      dispatch(localSignIn(parsedData));
    });
  }, [dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="Lists"
    >
      {authData?.token ? (
        <>
          <Stack.Screen
            name="Lists"
            component={Tabs}
            options={{
              title: "Lists",
              headerStyle: {
                backgroundColor: "#00A3FF",
                height: 82,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />

          <Stack.Screen
            name="Tasks"
            component={TasksScreen}
            screenOptions={{
              headerShown: true,
            }}
            options={{
              title: "Tasks",
              headerStyle: {
                backgroundColor: "#00A3FF",
                height: 82,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            screenOptions={{
              headerShown: false,
            }}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#00A3FF",
                height: 0,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            screenOptions={{
              headerShown: false,
            }}
            options={{
              title: "",
              headerLeft: null,
              headerStyle: {
                backgroundColor: "#00A3FF",
                height: 0,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
