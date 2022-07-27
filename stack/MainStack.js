import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "../components/tabs/Tabs";
import { getValueFor, save } from "../helpers/secureStore";
import { useEffect } from "react";
import { localSignIn } from "../actions/auth";

const Stack = createStackNavigator();

export default function MainStack() {
  const { authData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getValueFor("auth").then((data) => {
      const parsedData = JSON.parse(data);

      dispatch(localSignIn(parsedData));
    });
  }, [dispatch]);

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
