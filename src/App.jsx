import { PRODUCTS } from './components/product'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Navbar} from './components/Navbar'
import './App.css'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import { ShopContextProvider } from './context/shop-context'
import { useState } from 'react'
import Footer from './components/Footer'
import { Checkout } from './pages/Checkout/Checkout'
import { Check } from 'phosphor-react'
import ProductInfo from './pages/productInfo/ProductInfo'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
function App() {
  const [Products,setProducts] = useState(PRODUCTS)
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
            <Navbar setProducts = {setProducts} />
          <Routes>
            <Route path='/' element ={<Shop Products={Products} setProducts= {setProducts}/>}/>
            <Route path='/cart' element ={<Cart Products = {Products}/>}/> 
            <Route path='/checkout' element ={<Checkout Products = {Products}/>}/>
            <Route path="/ProductInfo/:productId" element={<ProductInfo/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path='/Sign' element ={<Register/>}/>
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>

    </div>
  )
}

export default App
