import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen_admin from "./Admin Protected Routing/Home Screen/HomeScreen";
import CreateUserScreen from "./Admin Protected Routing/Create User Screen/CreateUserScreen";

const Stack = createNativeStackNavigator()

const StackNavigator =() => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen_admin}/>
            <Stack.Screen name="Create New User" options={{ headerShown: true }} component={CreateUserScreen}/>

        </Stack.Navigator>
    );
};

const AdminNavigator = () => {
    return <StackNavigator/>;
};
export default AdminNavigator;