import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import APIPages from './Pages/AllApi'
import HomePages from './Pages/HomePages'
import ProfilePages from './Pages/ProfilePages'
import Software from './Pages/SoftWare'
import Dashboard from "./Pages/DashboardPage"



const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
    title: "Home Page"
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path: "api",
    element: <APIPages />,
    title: "API Pages"
  },
  {
    path: "*",
    element: <div><h1>404 - Page Not Found</h1></div>,
    title: "404 Not Found"
  },
  {
    path:"profile",
    element:<ProfilePages/>
  },
  {
    path:"software",
    element:<Software/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AllRoutes} />
  </StrictMode>
)
