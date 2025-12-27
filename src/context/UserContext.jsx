import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)
    const [token, setToken] = useState(localStorage.getItem("token") || "")

    const loginUser = (data) => {
        setUser(data.user)
        localStorage.setItem("user", JSON.stringify(data.user))
        setToken(data.token)
        localStorage.setItem("token", data.token)
    }

    const logoutUser = () => {
        setUser(null)
        setToken("")
        localStorage.removeItem("token")
    }

    return (
        <UserContext.Provider value={{ user, token, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}
