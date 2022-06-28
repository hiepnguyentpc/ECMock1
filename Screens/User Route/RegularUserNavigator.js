import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./Onboarding/First Screen/FirstScreen";
import SignUpScreen from "./Onboarding/SignUp Screen/SignUpScreen";
import LogInScreen from "./Onboarding/LogIn Screen/LogInScreen";
import HomeScreen from "./User Route/Home Screen/HomeScreen";
import QuizDetailScreen from "./User Route/Quiz Detail/QuizDetailScreen";
import QuizMain from "./User Route/Quiz Test/QuizMain";
import QuizResultScreen from "./User Route/Quiz Results/QuizResultScreen";
import { useRole } from "../context/RoleProvider";
import AdminNavigator from "./AdminNavigator";

const Stack = createNativeStackNavigator()

const StackNavigator =() => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="First Screen" options={{ headerShown: false }} component={FirstScreen}/>
            <Stack.Screen name="Sign Up Screen" options={{ headerShown: true }} component={SignUpScreen}/>
            <Stack.Screen name="Log In Screen" options={{ headerShown: true }} component={LogInScreen}/>
            <Stack.Screen name="Home Screen" options={{ headerShown: true }} component={HomeScreen}/>
            <Stack.Screen name="Quiz Detail" options={{ headerShown: true }} component={QuizDetailScreen}/>
            <Stack.Screen name="Quiz Main" options={{ headerShown: true }} component={QuizMain}/>
            <Stack.Screen name="Quiz Result" options={{ headerShown: true }} component={QuizResultScreen}/>
        </Stack.Navigator>
    );
};

const RegularUserNavigator = () => {
    return <StackNavigator/>;
};
export default RegularUserNavigator;