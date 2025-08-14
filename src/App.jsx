import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";



const dannyRouter = createBrowserRouter([
 { path: '/', element: <Home />},
 { path: '/about', element: <About /> },
 { path: '/product', element: <Product /> },
 { path: '/partners', element: <Partners />},
 { path: '/contact', element: <Contact />},

]);




function App() {
 

  return (
    <>
      <RouterProvider router={dannyRouter} />
    
    </>
  )
}

export default App
