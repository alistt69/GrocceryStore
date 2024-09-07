import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import "overlayscrollbars/overlayscrollbars.css";
import AboutPage from "./pages/about-page/aboutPage.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<AboutPage />} />
          </Routes>
      </Router>
  </React.StrictMode>,
)
