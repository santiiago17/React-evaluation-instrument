import './App.css'
import { Paint } from './components/Layouts/Paint/Paint'
import { Welcome } from './components/Layouts/Welcome/Welcome'
import {Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/paint" className='btnPictures' element={<Paint />} />
    </Routes>    
    </>
  )
}

export default App
