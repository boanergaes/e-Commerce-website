import { createContext, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Tracking from './pages/Tracking'
import { calculatePaymentSummary } from './utils/utils'

export const ProductContext = createContext()
export const CartContext = createContext()
export const DeliveryOptionsContext = createContext()
export const PaymentSummaryContext = createContext()

function App() {
  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [cart, setCart] = useState([])
  const [loadingCart, setLoadingCart] = useState(true)
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary, setPaymentSummary] = useState({})

  async function fetchProducts() {
      try {
          const productList = await fetch('/backend/products.json')
          const data = await productList.json()
          setProducts(data)
          setLoadingProducts(false)
      } catch(err) {
          console.error('error fetching products:', err)
      }
  }

  async function fetchCart() {
    // console.log('called')
    try {
      const cartList = await fetch('/backend/cart.json')
      const data = await cartList.json()
      setCart(data)
      setLoadingCart(false)
    } catch(err) {
      console.error('error fetching cart:', err)
    }
  }

  async function fetchDeliveryOptions() {
    try {
      const deliveryOptionsList = await fetch('/backend/deliveryOptions.json')
      const data = await deliveryOptionsList.json()
      setDeliveryOptions(data)
    } catch(err) {
      console.error('error fetching delivery options:', err)
    }
  }

//   async function fetchData(src, holder) {
//     try {
//         const fetched = await fetch(`/backend/${src}.json`)
//         const data = await fetched.json()
//         holder(data)
//     } catch (err) {
//         console.error('Error while fetching from --' + src, '\n', err)
//     }
//   }
  
  useEffect(() => {
      fetchProducts()
      fetchCart()
      fetchDeliveryOptions()
  }, [])

  useEffect(() => {
    setPaymentSummary(calculatePaymentSummary(products, cart, deliveryOptions))
  }, [products, cart, deliveryOptions])

  return (
    <ProductContext.Provider value={products}>
        <CartContext.Provider value={cart}>
            <DeliveryOptionsContext.Provider value={deliveryOptions}>
                <PaymentSummaryContext.Provider value={paymentSummary}>
                    <Routes>
                        <Route path='/' element={<Home loading={loadingProducts} fetcher={fetchProducts} />} />
                        <Route path='/checkout' element={<Checkout loading={loadingCart} fetcher={fetchCart} />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/tracking' element={<Tracking />} />
                    </Routes>
                </PaymentSummaryContext.Provider>
            </DeliveryOptionsContext.Provider>
        </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default App
