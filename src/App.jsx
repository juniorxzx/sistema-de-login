import React from 'react'
import './App.css'
import { GlobalStyle } from './assets/styles/GlobalStyle'
import RouteApp from './Routes/Route'
import { AuthProvider } from './Context/Auth'
function App() {

  return (
    <AuthProvider>
      <RouteApp />
      <GlobalStyle />
    </AuthProvider>
  )
}

export default App
