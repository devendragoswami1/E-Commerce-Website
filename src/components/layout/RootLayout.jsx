import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Proudct from './Proudct'

function RootLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout