import React from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icons } from "./Icons";
import { ListsScreen } from "../../screens/ListsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { TasksScreen } from "../../screens/TasksScreen";
import { Modals } from "../Modals";
import { useDispatch, useSelector } from "react-redux";
import { addDrawerAction } from "../../store/actions/user";
import { AddListForm } from "../form/AddListForm";
import { Buttons } from "../form/Buttons";
import { save } from "../../helpers/secureStore";
import { LOGOUT } from "../../store/constants/constants";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Lists"
      screenOptions={{
        headerShown: false,
      }}
    >
      <>
        <Stack.Screen
          name="Lists"
          component={ListsScreen}
          options={{
            title: "Lists!!!",
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
    </Stack.Navigator>
  );
}

function SettingsScreen() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    save("auth", "");
    dispatch({ type: LOGOUT });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Buttons title={"Log out"} onPress={handleLogOut} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MockComponent() {
  return null;
}

export default function Tabs() {
  const { addDrawer } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const openDrawer = () => {
    dispatch(addDrawerAction());
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          return <Icons color={color} type={route.name} />;
        },
        tabBarActiveTintColor: "#00a3ff",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
          tabBarStyle: { height: 75, paddingBottom: 25 },
          tabStyle: {
            height: 30,
          },
        }}
      />
      <Tab.Screen
        name="ListCreate"
        component={MockComponent}
        options={{
          tabBarButton: () => (
            <Modals
              addButton
              isOpen={addDrawer}
              openDrawer={openDrawer}
              closeDrawer={openDrawer}
              title="New list"
            >
              <AddListForm />
            </Modals>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
