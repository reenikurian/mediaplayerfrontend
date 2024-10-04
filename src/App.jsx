import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landingpage from './pages/Landingpage'
import Watchhistory from './pages/Watchhistory'
import Home from './pages/Home'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch' element={<Watchhistory/>}/>
    
    </Routes>
      <Footer/>
    
    </>
  )
}

export default App
