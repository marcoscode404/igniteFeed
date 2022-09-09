import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// coloquei ! para falar para o typescript que o root não vai ser excluido
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
