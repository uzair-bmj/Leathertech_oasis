import React, { createContext, useState } from 'react'

const Order = createContext()

export default function OrderContext({children}) {

    const [orderdetail , setorderdetail] = useState([])
    
  return (
    <>
        <Order.Provider value={{orderdetail , setorderdetail}}>
            {children}
        </Order.Provider>
    </>
  )
}
export {Order}
