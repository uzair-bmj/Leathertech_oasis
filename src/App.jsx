import { useState } from 'react'
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
import Navbar from './Components/Landing Page/Navbar';
import Order from './Components/Order/Order';


function App() {



  return (
    <Router>
      <div className='bg-gray-300'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/phones' element={<SmartPhone />} />
          <Route path='/watch' element={<SmartWatches />} />
          <Route path='/jacket' element={<Leatherjackets />} />
          <Route path='/wallet' element={<Leatherwallets />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
