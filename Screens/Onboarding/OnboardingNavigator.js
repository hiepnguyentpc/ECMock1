import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./First Screen/FirstScreen";
import SignUpScreen from "./SignUp Screen/SignUpScreen";
import LogInScreen from "./LogIn Screen/LogInScreen";

const Stack = createNativeStackNavigator()

const StackNavigator =() => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="First Screen" options={{ headerShown: false }} component={FirstScreen}/>
            <Stack.Screen name="Sign Up Screen" options={{ headerShown: true }} component={SignUpScreen}/>
            <Stack.Screen name="Log In Screen" options={{ headerShown: true }} component={LogInScreen}/>
        </Stack.Navigator>
    );
};

const OnboardingNavigator = () => {
    return <StackNavigator/>;
};
export default OnboardingNavigator;