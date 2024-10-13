import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Advantage from './components/Advantage/Advantage'
import Program from './components/Program/Program'
import Question from './components/Question/Question'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/FooterBottom/FooterBottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
        <Navbar />
        <div className='container'>
            <Home />
            <Advantage />
            <Program />
            <Question />
        </div>
        <Footer />
        <FooterBottom />
    </div>
    
  )
}

export default App
