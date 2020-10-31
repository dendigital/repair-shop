import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { AppProvider } from './app/modal/context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
