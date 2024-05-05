import React, { useEffect, useState } from 'react'
import useCart from '../../Hooks/useCart'
import "./order.css"
import { useNavigate } from 'react-router-dom'

export default function Cart() {

  const { cartitems, setcartitems } = useCart()
  const [quantities, setQuantities] = useState({});
  const [ordermsg, setordermsg] = useState(false);
  const [total, settotal] = useState(0);
  const [itemstotal, setitemstotal] = useState(0);
  const nav = useNavigate()


  useEffect(() => {
    const cal = cartitems.reduce((accu, item) => accu + (item.proprice * item.proquantity), 0);
    console.log(cal)
    settotal(cal);

    const totalitems = cartitems.reduce((accu, items) => accu + items.proquantity, 0)
    setitemstotal(totalitems)
  }, [cartitems, quantities, itemstotal]);



  function increament(index) {
    const newquantity = [...cartitems]
    newquantity[index].proquantity++;
    setQuantities(newquantity)
  };

  function decreament(index) {
    if (!cartitems[index].proquantity < 1) {
      const decrease = [...cartitems]
      decrease[index].proquantity--;
      setQuantities(decrease)
    }

  }
  const removefromcart = (index) => {
    const newcart = [...cartitems]
    newcart.splice(index, 1)
    setcartitems(newcart)
  }

  function proceedtoorder() {
    if (cartitems.length > 0) {
      nav("/order")
    }
    else {
      setordermsg(true)
    }
  }

  return (
    <>
      <div className='py-10 '>
        <div className='w-full px-8 py-4 m-auto mt-9 md:mt-20  relative'>
          <img src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-[60vh] opacity-30 shadow-2xl rounded-xl' alt="" />
          <h1 className='absolute top-[50%] left-[50%] text-3xl md:text-4xl lg:text-6xl font-bold price' style={{ transform: "translate(-50% , -50%)" }}>Products Cart</h1>
        </div>
        <div className='flex flex-col justify-center items-center mt-10'>
          <h1 className='text-3xl font-bold price text-center'>My Cart</h1>
          <div className='flex justify-between w-[80vw] '>
            <div className='mt-5 px-4 py-2 rounded-lg text-xl ' style={{border : "1px solid black"}}>
              <h1 className='text-xl  font-medium'>Total Items : <span className='price'>{itemstotal} </span></h1>
            </div>
            <div className='flex justify-between gap-x-2 px-4 py-2 rounded-lg ' style={{ border: "1px solid black" }}>
              <h1 className='text-xl font-medium'>Total Price:</h1>
              <h1 className='price text-xl font-bold  '> {`$${total}`}</h1>
            </div>
          </div>


          <div className='px-8 py-3 flex flex-col justify-center gap-y-5 w-[80vw] mt-5 rounded-lg text-center' style={{ border: "2px solid rgb(255, 187, 51)" }}>
            {
              cartitems && cartitems.length > 0 ? (
                cartitems.map((items, index) => (
                  <div key={index} className='flex justify-between items-center gap-y-5 px-8 py-2 rounded-xl' style={{ border: "1px solid black" }}>
                    <img src={items.proimg} alt="" className='w-12 h-14' />
                    <div className='w-[15vw]'>
                      <h1 className='text-lg text-gray-500 font-semibold'>Product Name</h1>
                      <h1 className='text-lg font-bold'>{items.proname}</h1>
                    </div>
                    <div className='w-[10vw]'>
                      <h1 className='text-lg text-gray-500 font-semibold'>Product Price</h1>
                      <h1 className='text-lg font-bold'>${items.proprice}</h1>
                    </div>
                    <div className='w-[10vw]'>
                      <h1 className='text-lg text-gray-500 font-semibold'>Quantity</h1>
                      <div className='flex justify-center gap-x-5'>
                        <button className='shopbtn rounded-lg px-3 py-1' onClick={() => decreament(index)}>-</button>
                        {/* <h1>{quantities[index] || 1}</h1> */}
                        <h1>{items.proquantity || 1}</h1>
                        <button className='shopbtn rounded-lg px-2 py-1' onClick={() => increament(index)}>+</button>
                      </div>
                    </div>
                    <button className='shopbtn rounded-full px-4 py-2 ' onClick={() => removefromcart(index)}>Remove</button>
                  </div>
                ))
              ) : (
                <>
                  <div className='text-center py-2'>
                    <h1 className='text-xl font-semibold '>Your Cart is empty</h1>
                    <button className='px-4 py-2 shopbtn rounded-full mt-4' onClick={()=> nav('/products')}>Go to Shop</button>
                  </div>

                </>
              )}
          </div>

        </div>
        <div className='flex flex-col justify-center gap-y-2 rounded-lg w-[20vw] items-center px-6 mx-32 py-8 mt-8 text-center' style={{ border: "1px solid gray" }}>
          <h1 className='text-gray-500 font-bold'>Sub Total : </h1> <span className='text-2xl  font-bold price'>{`$${total}`}</span>
          <button className='shopbtn px-3 py-1 rounded-lg' onClick={proceedtoorder}>Proceed to Place Order</button>
        </div>

      </div>
      {
        ordermsg && (
          <>
            <div className='modal-wrapper' onClick={() => setordermsg(false)}></div>
            <div className='container rounded shadow-lg py-4 px-4 max-w-[15rem]'>
              <h1 className='text-xl font-medium'>Cart is Empty</h1>
              <button className='modalbtn py-1 mt-2 px-4 text-xl rounded-xl font-medium' onClick={() => setordermsg(false)}>Ok</button>
            </div>
          </>
        )
      }


    </>
  )
}

