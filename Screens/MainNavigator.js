import React from "react";
import { useRole } from "../context/RoleProvider";
import AdminNavigator from "./Admin Protected Routing/AdminNavigator"
import RegularUserNavigator from "./User Route/RegularUserNavigator"


const MainNavigator = () => {
    const {isAdmin} = useRole()
    //return <AdminNavigator/>
    return isAdmin? <AdminNavigator/> : <RegularUserNavigator/>;
};
export default MainNavigator;