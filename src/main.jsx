import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import './index.css';
import Hero from './components/Home/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App>
          <Routes>
            <Route path="/portfolio-vite2/muffynx/" element={<Hero />} />
            <Route path="/portfolio-vite2/muffynx/about" element={<About />} />
            <Route path="/portfolio-vite2/muffynx/projects" element={<Projects />} />
            <Route path="/portfolio-vite2/muffynx/contact" element={<Contact />} />
          </Routes>
        </App>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
