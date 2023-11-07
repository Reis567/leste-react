import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider, Route} from 'react-router-dom'

//Paginas
import Home from './routes/Home.jsx'
import newContato from './routes/newContato.jsx'

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/'
      },
      {
        path:'/new'
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
