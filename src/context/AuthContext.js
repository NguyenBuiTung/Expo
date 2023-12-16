import React, { createContext } from "react";
import { authProvider } from "./auth";
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const auth = authProvider()
    return (
        <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    )
}

