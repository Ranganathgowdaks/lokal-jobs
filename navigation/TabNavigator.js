import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobsScreen from "../screens/JobsScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import JobDetailScreen from "../screens/JobDetailScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Reusable logo for headerLeft
const HeaderLogo = () => (
  <View style={{ marginLeft: 8 }}>
    <Image
      source={require("../assets/app-icon.jpg")}
      style={{ width: 36, height: 36, resizeMode: "contain" }}
    />
  </View>
);

// Notification icon (headerRight)
const HeaderNotification = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ marginRight: 12 }}>
    <Ionicons name="notifications-outline" size={24} color="black" />
  </TouchableOpacity>
);

// Common screen options with logo & notification
const getScreenOptions = {
  headerLeft: () => <HeaderLogo />,
  headerRight: () => (
    <HeaderNotification onPress={() => console.log("Notifications clicked")} />
  ),
  title: "Lokal Jobs",
};

// Create stack with logo & notification
function createStack(MainScreen) {
  return function StackNavigatorComponent() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={MainScreen}
          options={getScreenOptions}
        />
        <Stack.Screen
          name="JobDetail"
          component={JobDetailScreen}
          options={{ title: "Job Details" }}
        />
      </Stack.Navigator>
    );
  };
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName =
            route.name === "Jobs" ? "briefcase-outline" : "bookmark-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Jobs" component={createStack(JobsScreen)} />
      <Tab.Screen name="Bookmarks" component={createStack(BookmarksScreen)} />
    </Tab.Navigator>
  );
}
