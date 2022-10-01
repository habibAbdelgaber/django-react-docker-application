import React, { useState } from "react"
import { authService } from "../auth/login"

export const AuthCentext = React.createContext(null)


export function AuthContextProvider({children}){
    const [user, setUser] = useState(() => {
        return authService.getUser()
    })

    function logout() {
        authService.logout()
        setUser(null)
    }
    function login(username, email, password) {
        const user = authService.login(username, email, password)
        setUser(user)
    }


   return (
    <AuthCentext.Provider
    value={{
        logout,
        login,
        user
    }}
>
    {children}
</AuthCentext.Provider>
   )
}