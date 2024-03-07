// main.tsx or main.jsx
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Providers } from './providers/MainProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <App />
  </Providers>
)
