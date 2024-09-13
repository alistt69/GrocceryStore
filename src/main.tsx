import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "overlayscrollbars/overlayscrollbars.css";
import {FunctionsProvider} from "./context/context.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <FunctionsProvider>
          <App />
      </FunctionsProvider>
  </React.StrictMode>,
)
