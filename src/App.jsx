import React from 'react'
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom'
import AllComponents from './components/AllComponents'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      
        <Routes>
          <Route path='/' element={<AllComponents />} />
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
