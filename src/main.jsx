import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './Contexto/Provider.jsx' //neste arquivo estamos armazenando os conteudo para compartilhar com seus filhos
import Home from './Home.jsx'
import Tarefas from './view/Tarefas/Tarefas.jsx'
import './Global.scss'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Tarefas",
    element: <Tarefas  />, 
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <Provider>

      <RouterProvider router={router} />

    </Provider>  

  </React.StrictMode>,

)
