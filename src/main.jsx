import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import APIPages from './Pages/AllApi'
import HomePages from './Pages/HomePages'
import ProfilePages from './Pages/ProfilePages'
import Software from './Pages/SoftWare'
import Dashboard from "./Pages/DashboardPage"
import PrivacyPolicy from './QuikLinks/PrivacyPolicy'
import Disclaimer from './QuikLinks/Disclaimer'
import Features from './QuikLinks/Features'
import Community from './QuikLinks/Community'
import TermsConditions from './QuikLinks/TermsConditions'
import OpenSource from './QuikLinks/OpenSource'
import AboutPage from './Pages/AboutPage'
import Docs from './QuikLinks/Docs'
import ContactPage from "./Pages/ContactPage"
import SubmitProject from './Pages/SubmitProject'
import ForumPage from './Pages/ForumPage'
import AdminPage from './Admin/AdminPage'
import Participates from "./AdminPages/Participates"

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
    title: "Home Page"
  },
  {
    path: "/dashboard",
    element: <Dashboard />
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
    path: "profile",
    element: <ProfilePages />
  },
  {
    path: "software",
    element: <Software />
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "disclaimer",
    element: <Disclaimer />
  },
  {
    path: "features",
    element: <Features />
  },
  {
    path:"community",
    element:<Community/>
  },{
    path:"terms-condition",
    element:<TermsConditions/>
  },
  {
    path:"open-soruce",
    element:<OpenSource/>
  },
  {
    path:"about",
    element:<AboutPage/>
  },
  {
    path:"docs",
    element:<Docs/>
  },
  {
    path:"contact",
    element:<ContactPage/>
  },
  {
    path:"SubmitProject",
    element:<SubmitProject/>
  },
  {
    path:"forum",
    element:<ForumPage/>
  },
  {
    path:"work",
    element:<AdminPage/>
  },
  {
    path:"participateentry",
    element:<Participates/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AllRoutes} />
  </StrictMode>
)
