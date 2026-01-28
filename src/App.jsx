import React from 'react'
import Home from './pages/HomePage/Home.jsx'
import Allproducts from './components/allproducts/allproducts/allproducts.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotfoundPage from './pages/Notfound/NotfoundPage.jsx'
import Layout from './components/layouts/Layout.jsx'
import Blogdetails from './pages/BlogdetailsPage/Blogdetails.jsx'


const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "home", element: <Home /> },
      { path: "blogs", element: <Allproducts /> },
      { path: "*", element: <NotfoundPage /> },
      { path: "blog-details", element: <Blogdetails /> },
    ]
  }
])
export default function App() {
  return (
    <>
     <RouterProvider router={myrouter}/>
    </>

  )
}
