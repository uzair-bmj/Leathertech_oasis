import { useContext } from "react";
import { Cart } from "../Context/Cartcontext";



const useCart = () =>{
    return useContext(Cart)
};

export default useCart;