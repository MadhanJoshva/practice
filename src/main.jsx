import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import FoodCarousel from './pages/cuosal.jsx'
import 'antd/dist/reset.css'
import { store } from './app/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Provider store={store}> 
    <App />
    </Provider>
  </StrictMode> 
)
