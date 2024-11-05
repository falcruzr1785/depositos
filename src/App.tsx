
import './App.css'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Index from './Index'
import { Route, Routes } from 'react-router-dom'
import FormSubasta from './Components/FormSubasta'
import FormTransporte from './Components/FormTransporte'

function App() {
  

  return (
    <>
    <NavBar/>
   <div style={{ paddingBottom: '3rem' }}>
    
   <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/subastas" element={<FormSubasta />} />
        <Route path="/transportes" element={<FormTransporte/>} />
      </Routes>
   </div>

   <Footer/>
   </>
  )
}

export default App
