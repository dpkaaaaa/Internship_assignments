import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from "./components/ProductList";
import CartProvider from "./provider/CartProvider";

function App() {
  

  return (
    <CartProvider>
      <ProductList />
    </CartProvider>
  )
}

export default App
