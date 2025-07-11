import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLogIn from './App.jsx'
import { AuthProvider } from './utils/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppLogIn />
    </AuthProvider>
  </StrictMode>,
)
