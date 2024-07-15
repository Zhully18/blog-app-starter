import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogContextProvider from './Components/BlogContext/BlogContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BlogContextProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </Router>
  </BlogContextProvider>
)
