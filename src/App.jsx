//import { useState } from 'react'
import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div className="card">
      <Info />
      <div className="container">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
    
  )
}


