import Proudct from "./components/layout/Proudct"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from "./components/layout/RootLayout"
import Cart from "./components/layout/Cart"
import { Provider } from "react-redux"
import store from "./store/store"
import { Toaster } from "react-hot-toast"
import Home from "./components/layout/Home"
import Contact from "./components/layout/Contact"


const router = createBrowserRouter([{
  path : '',
  element : <RootLayout/>,
  children : [
    {
      path : "",
      element : <Home/>
    },
    {
      path : "/products",
      element : <Proudct/>,
    },
    {
      path : "/cart",
      element : <Cart/>,
    },
    {
      path : "/contact",
      element : <Contact/>,
    },

  ]
}])
function App() {
  return (
    <>
  
    <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster/>
    </Provider>
    </>
  )
}

export default App  

