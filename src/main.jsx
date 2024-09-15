import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/fonts.css'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
