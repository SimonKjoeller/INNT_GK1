// React Native App med Tab + Stack Navigator
import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Import af screens
import HomeScreen from "./screens/HomeScreen";
import GameRatingScreen from "./screens/GameRatingScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();
// Når jeg tilføjer en stack, så er det ligesom, at sige, at lagene er ovenpå hinanden. Altså at jeg skal gennem HomeScreen, for at komme til GameRatingScreen.
const Stack = createStackNavigator();

// Stack Navigator for Home delen (Home + Game Rating)
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="GameRating" component={GameRatingScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: {
            paddingBottom: 5,
            height: 70,
          },
          headerStyle: {
            backgroundColor: '#f8f9fa',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="Home Screen"
          component={HomeStack}
          options={{
            tabBarLabel: 'Spil',
            tabBarIcon: () => <Text>🎮</Text>,
            headerTitle: 'Mine Spil'
          }}
        />

        <Tab.Screen
          name="Profile Screen"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: () => <Text>👤</Text>,
            headerTitle: 'Min Profil'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
