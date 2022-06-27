import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen_admin from "./Admin Protected Routing/Home Screen/HomeScreen";

const Stack = createNativeStackNavigator()

const StackNavigator =() => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen_admin}/>
        </Stack.Navigator>
    );
};

const AdminNavigator = () => {
    return <StackNavigator/>;
};
export default AdminNavigator;