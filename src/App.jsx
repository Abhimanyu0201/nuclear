import { useState } from 'react'
import './App.css'
import { Navbar } from './Component/Navbar'
import { Hero } from './Component/Hero'
import { About } from './Component/About'
import { Banner } from './Component/Banner'
import { Footer } from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default App
