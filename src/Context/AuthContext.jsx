import { createContext, useState } from "react";

const Authentication = createContext();

function AuthContext({ children }) {

    const [users, setusers] = useState([
        {
            fullName: "Uzair Ahmed",
            Email: "ua@gmail.com",
            pass: 123456
        }
    ])
    const [verifyuser, setverifyuser] = useState(false)
    const [profile, setprofile] = useState("")



    return (
        <>
            <Authentication.Provider value={{ users, setusers, verifyuser, setverifyuser, profile, setprofile }}>
                {children}
            </Authentication.Provider>
        </>
    )
}

export default AuthContext;
export { Authentication };