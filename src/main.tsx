import React from 'react'
import ReactDOM from 'react-dom/client'


import { AppRouter } from './router/AppRouter'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <AppRouter />



  </React.StrictMode>,
)
