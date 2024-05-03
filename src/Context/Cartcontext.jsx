import { createContext, useState } from "react";

const Cart = createContext();

function Cartcontext({ children }) {

    const [cartitems, setcartitems] = useState([])

    return (
        <>
            <Cart.Provider value={{cartitems , setcartitems}}>
                {children}
            </Cart.Provider>
        </>
    )
}

export default Cartcontext;
export { Cart };