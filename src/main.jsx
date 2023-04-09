import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './component/ErrorPage'
import Home from './component/Home'
import Statistices from './component/Statistices'
import AppledJob from './component/AppledJob'
import Blog from './component/Blog'

const router =createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/statistic',
        element: <Statistices></Statistices>
      },
      {
        path:'/appled',
        element: <AppledJob></AppledJob>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>

    </RouterProvider>
)
