import { useContext } from "react";
import { Authentication } from "../Context/AuthContext";


const useAuth = () =>{
    return useContext(Authentication)
};

export default useAuth;