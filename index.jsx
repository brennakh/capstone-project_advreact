import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvidor } from './Context.jsx'
import App from './App.jsx'

ReactDOM.render(
  <BrowserRouter>
    <ContextProvidor>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvidor>
  </BrowserRouter>,
  document.getElementById('root')
)
