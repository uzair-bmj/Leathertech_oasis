import { useContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Profile from './Components/Profile/Profile';
import SmartPhone from './Components/Products/Smartphone';
import SmartWatches from './Components/Products/SmartWatches';
import Leatherjackets from './Components/Products/Leatherjackets';
import Leatherwallets from './Components/Products/Leatherwallets';
import Cart from './Components/Order/Cart';
import Order from './Components/Order/Order';
import MyOrder from './Components/Order/MyOrder';
import Products from "./Components/Products/Products"
import { Authentication } from './Context/AuthContext';
import Spinner from './Components/Spinner';
import Productdetail from './Components/Products/Productdetail';

function App() {

  const { loading, setLoading } = useContext(Authentication)
  useEffect(() => {
    setLoading(true)
  }, [])


  return (
    <Router>
      <div className='bg-gray-300'>



        {loading ? <Spinner /> : (
          <>

            <Routes>
              <Route path='/' element={<Landingpage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/phones' element={<SmartPhone />} />
              <Route path='/watch' element={<SmartWatches />} />
              <Route path='/jacket' element={<Leatherjackets />} />
              <Route path='/wallet' element={<Leatherwallets />} />
              <Route path='/products' element={<Products />} />
              <Route path='/prodetail' element={<Productdetail />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/order' element={<Order />} />
              <Route path='/myorder' element={<MyOrder />} />

            </Routes>
          </>
        )}
            

      </div>
    </Router>
  )
}

export default App
