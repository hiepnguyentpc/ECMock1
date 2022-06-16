

import * as React from "react";

import LogInScreen from "./Screens/Onboarding/LogIn Screen/LogInScreen"
import SignUpScreen from "./Screens/Onboarding/SignUp Screen/SignUpScreen";
import FirstScreen from "./Screens/Onboarding/First Screen/FirstScreen";
import HomeScreen from "./Screens/Home Screen/HomeScreen";
import QuizDetailScreen from "./Screens/Quiz Detail/QuizDetailScreen";
import QuizMain from "./Screens/Quiz Test/QuizMain";




import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (

   
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="First Screen" options = {{headerShown:false}} component={FirstScreen}/>
        <Stack.Screen name = "Sign Up Screen" options={{headerShown: false}} component={SignUpScreen}/>
        <Stack.Screen name = "Log In Screen" options={{headerShown: false}} component={LogInScreen}/>
        <Stack.Screen name = "Home Screen" options={{headerShown:false}} component={HomeScreen}/>
        <Stack.Screen name = "Quiz Detail" options={{headerShown:false}} component={QuizDetailScreen}/>

      
        <Stack.Screen name = "Quiz Main" options = {{headerShown:false}} component={QuizMain}/>


      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


/* 


  <Stack.Screen name="First Screen" options = {{headerShown:false}} component={FirstScreen}/>
        <Stack.Screen name = "Sign Up Screen" options={{headerShown: false}} component={SignUpScreen}/>
        <Stack.Screen name = "Log In Screen" options={{headerShown: false}} component={LogInScreen}/>
        <Stack.Screen name = "Home Screen" options={{headerShown:false}} component={HomeScreen}/>
        <Stack.Screen name = "Quiz Detail" options={{headerShown:false}} component={QuizDetailScreen}/>





*/