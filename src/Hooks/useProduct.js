import { useContext } from "react";
import { Productlist } from "../Context/Prolistcontext";



const useProduct = () =>{
    return useContext(Productlist)
};

export default useProduct;