import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Home Screen/HomeScreen";
import QuizDetailScreen from "./Quiz Detail/QuizDetailScreen";
import QuizMain from "./Quiz Test/QuizMain";
import QuizResultScreen from "./Quiz Results/QuizResultScreen";
import { useRole } from "../context/RoleProvider";
import AdminNavigator from "./AdminNavigator";

const Stack = createNativeStackNavigator()

const StackNavigator =() => {
    return(
        <Stack.Navigator>
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