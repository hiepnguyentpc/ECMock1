import React from "react";
import { useRole } from "../context/RoleProvider";
import AdminNavigator from "./AdminNavigator";
import RegularUserNavigator from "./RegularUserNavigator";



const MainNavigator = () => {
    const {isAdmin} = useRole()
    return isAdmin? <AdminNavigator/> : <RegularUserNavigator/>;
};
export default MainNavigator;