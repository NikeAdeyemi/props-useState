import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/products" element = {<Products />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/signup" element = {<Signup />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App