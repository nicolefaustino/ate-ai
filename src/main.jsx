import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Start from './Start.jsx'
import Landing from './Landing.jsx'
import Chatbot from './Chatbot.jsx'
import SalesLog from './SalesLog.jsx'
import ScanInventory from './ScanInventory.jsx'
import TrackKita from './TrackKita.jsx'
import Mabenta from './Mabenta.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/saleslog" element={<SalesLog />} />
        <Route path="/scaninventory" element={<ScanInventory />} />
        <Route path="/trackkita" element={<TrackKita />} />
        <Route path="/mabenta" element={<Mabenta />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
