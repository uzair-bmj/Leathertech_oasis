import { useContext } from "react";
import { Order } from "../Context/OrderContext";



const useOrder = () =>{
    return useContext(Order)
}

export default useOrder;    