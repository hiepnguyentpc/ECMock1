

import * as React from "react";

import LogInScreen from "./Screens/Onboarding/LogIn Screen/LogInScreen"
import SignUpScreen from "./Screens/Onboarding/SignUp Screen/SignUpScreen";
import FirstScreen from "./Screens/Onboarding/First Screen/FirstScreen";
import HomeScreen from "./Screens/Home Screen/HomeScreen";
import QuizDetailScreen from "./Screens/Quiz Detail/QuizDetailScreen";



import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (

   
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name = "Quiz Screen" options = {{headerShown: false}} component={QuizDetailScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


/* 
        <Stack.Screen name = "Sign Up Screen" options={{headerShown: false}} component={SignUpScreen}/>
        <Stack.Screen name = "Log In Screen" options={{headerShown: false}} component={LogInScreen}/>*/