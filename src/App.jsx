import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Tracking from './pages/Tracking'
import Header from './components/Header'

export const ProductContext = createContext()

function App() {
  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [cart, setCart] = useState([])
  const [loadingCart, setLoadingCart] = useState(true)

  async function fetchProducts() {
      try {
          const productList = await fetch('/backend/products.json')
          const data = await productList.json()
          setProducts(data)
          setLoadingProducts(false)
      } catch(err) {
          console.error('error:', err)
      }
  }

  async function fetchCart() {
    console.log('called')
    try {
      const cartList = await fetch('/backend/cart.json')
      const data = await cartList.json()
      setCart(data)
      setLoadingCart(false)
    } catch(err) {
      console.error('error:', err)
    }
  }

  return (
    <ProductContext.Provider value={products}>
      <Header />
      <Routes>
        <Route path='/' element={<Home loading={loadingProducts} fetcher={fetchProducts} />} />
        <Route path='/checkout' element={<Checkout cart={cart} loading={loadingCart} fetcher={fetchCart} />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/tracking' element={<Tracking />} />
      </Routes>
    </ProductContext.Provider>
  )
}

export default App
