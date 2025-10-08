
import './App.css'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'

function App() {

    


  return (
    <>
     <Header />
     <Outlet />
     <Footer/>
    </>
  )
}

export default App
