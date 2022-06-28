import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import RoleProvider from "./context/RoleProvider";
import MainNavigator from "./Screens/MainNavigator";

export default function App(){
  return (
    <RoleProvider>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </RoleProvider>
    
  );
}
