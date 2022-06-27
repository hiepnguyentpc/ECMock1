import * as React from "react";
import { useState, useEffect } from "react";

import LogInScreen from "./Screens/Onboarding/LogIn Screen/LogInScreen";
import SignUpScreen from "./Screens/Onboarding/SignUp Screen/SignUpScreen";
import FirstScreen from "./Screens/Onboarding/First Screen/FirstScreen";
import HomeScreen from "./Screens/Home Screen/HomeScreen";
import HomeScreen_admin from "./Screens/Admin Protected Routing/Home Screen/HomeScreen";
import QuizDetailScreen from "./Screens/Quiz Detail/QuizDetailScreen";
import QuizMain from "./Screens/Quiz Test/QuizMain";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizResultScreen from "./Screens/Quiz Results/QuizResultScreen";
import RoleProvider from "./context/RoleProvider";
import OnboardingNavigator from "./Screens/Onboarding/OnboardingNavigator";
import AdminNavigator from "./Screens/AdminNavigator";
import RegularUserNavigator from "./Screens/RegularUserNavigator";
import MainNavigator from "./Screens/MainNavigator";

const Stack = createNativeStackNavigator();
const RoleContext = React.createContext();

export default function App(){
  const [isAdmin, checkIsAdmin] = useState(false)  
  
  const getUserRole = async () => {
    try {
      const userRole = await AsyncStorage.getItem("userRole");
      //console.log(userRole)
      if (userRole == "admin"){
        checkIsAdmin(true)
      }
      else if (userRole == "user"){
        checkIsAdmin(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getUserRole();
    return () =>{
      console.log(isAdmin)
    };
  },[]);
  
  

  //console.log("testing")

  return (
    <RoleProvider>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </RoleProvider>
    
  );
}


/*
{ isUser ? (
        <>
          
            <Stack.Screen name="Home Screen" options={{ headerShown: true }} component={HomeScreen}/>

            <Stack.Screen name="Quiz Detail" options={{ headerShown: true }} component={QuizDetailScreen}/>

            <Stack.Screen name="Quiz Main" options={{ headerShown: true }} component={QuizMain}/>

            <Stack.Screen name="Quiz Result" options={{ headerShown: true }} component={QuizResultScreen}/>
            </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen_admin}/>

        </>
      )};
      */




/*

<RoleContext.Provider value={isAdmin}>
    <NavigationContainer>

      <Stack.Navigator>
      
            <Stack.Screen name="First Screen" options={{ headerShown: false }} component={FirstScreen}/>
            <Stack.Screen name="Sign Up Screen" options={{ headerShown: true }} component={SignUpScreen}/>
            <Stack.Screen name="Log In Screen" options={{ headerShown: true }} component={LogInScreen}/>

            { isAdmin ? (
        <>
          
            <Stack.Screen name="Home Screen" options={{ headerShown: true }} component={HomeScreen}/>

            <Stack.Screen name="Quiz Detail" options={{ headerShown: true }} component={QuizDetailScreen}/>

            <Stack.Screen name="Quiz Main" options={{ headerShown: true }} component={QuizMain}/>

            <Stack.Screen name="Quiz Result" options={{ headerShown: true }} component={QuizResultScreen}/>
            </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen_admin}/>
        </>
      )}
      </Stack.Navigator>


    </NavigationContainer>
    </RoleContext.Provider>
    */