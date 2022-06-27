

import { Children, createContext, useContext, useState } from "react";

const RoleContext = createContext()

const RoleProvider = ({children}) => {
    const [isAdmin, setIsAdmin] = useState(false)
    return <RoleContext.Provider value={{isAdmin, setIsAdmin}}>
        {children}
    </RoleContext.Provider>
}
export const useRole = () => useContext(RoleContext)
export default RoleProvider;