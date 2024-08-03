
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {
  const router  = createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true , element : <Home/>},
    {path:'about' , element : <About/>,children:[
      {index:true,element:<div>About1</div>},
      {path:'about2',element:<div>About2</div>},
      {path:'about3',element:<div>About3</div>},
    ]},
    {path:'contact' , element : <Contact/>},
  ]}
  ])

  return <>
  <RouterProvider router={router}/>
  




  </>
}

export default App
