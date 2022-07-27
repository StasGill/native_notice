import React from "react";
import { Button, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icons } from "./Icons";
import { ListsScreen } from "../../screens/ListsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { TasksScreen } from "../../screens/TasksScreen";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Lists">
      <>
        <Stack.Screen
          name="Lists"
          component={ListsScreen}
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
      </>
    </Stack.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MockComponent() {
  return null;
}

export default function Tabs() {
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="ListCreate"
        component={MockComponent}
        options={{
          tabBarButton: () => <Icons color={"gray"} type={"Add"} />,
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
