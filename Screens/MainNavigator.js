import React from "react";
import { useRole } from "../context/RoleProvider";
import AdminNavigator from "./Admin Protected Routing/AdminNavigator";
import RoleProvider from "../context/RoleProvider";



const MainNavigator = () => {
    const {isAdmin} = useRole()
    //return <AdminNavigator/>
    return isAdmin? <AdminNavigator/> : <RegularUserNavigator/>;
};
export default MainNavigator;