import { createContext, useEffect, useState } from "react";

const Cart = createContext();

function Cartcontext({ children }) {

    const [cartitems, setcartitems] = useState([])
    useEffect(() => {
        console.log("cartitmes", cartitems);

    } , [cartitems])

    return (
        <>
            <Cart.Provider value={{ cartitems, setcartitems }}>
                {children}
            </Cart.Provider>
        </>
    )
}

export default Cartcontext;
export { Cart };