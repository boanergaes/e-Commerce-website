import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Tracking from './pages/Tracking'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/tracking' element={<Tracking />} />
      </Routes>
    </>
  )
}

export default App
