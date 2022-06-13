import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as React from "react";

import LogInScreen from "./Screens/Onboarding/LogIn Screen/LogInScreen"
import SignUpScreen from "./Screens/Onboarding/SignUp Screen/SignUpScreen";
import FirstScreen from "./Screens/Onboarding/First Screen/FirstScreen";
import HomeScreen from "./Screens/Home Screen/HomeScreen";



import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <HomeScreen/>
    /*
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "First Screen" options={{headerShown:false}} component={FirstScreen}/>
        <Stack.Screen name = "Sign Up Screen" options={{headerShown: false}} component={SignUpScreen}/>
        <Stack.Screen name = "Log In Screen" options={{headerShown: false}} component={LogInScreen}/>
        <Stack.Screen name = "Home Screen" options={{headerShown: false}} component= {HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    */
  );
}

