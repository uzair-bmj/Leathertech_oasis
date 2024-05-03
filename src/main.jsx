import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './Context/AuthContext.jsx'
import Prolistcontext from './Context/Prolistcontext.jsx'
import Cartcontext from './Context/Cartcontext.jsx'
import OrderContext from './Context/OrderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderContext>
      <Cartcontext>
        <Prolistcontext>
          <AuthContext>
            <App />
          </AuthContext>
        </Prolistcontext>
      </Cartcontext>
    </OrderContext>
  </React.StrictMode>,
)
