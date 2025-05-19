import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import GatsbyLanding from './Starting.jsx'
import Archive from './Archive'
import Timeline from './Timeline'
import Characters from './Characters'
import History from './History'
import Author from './Author'
import CharacterQuiz from './CharacterQuiz.jsx'
import Summary from './Summary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<GatsbyLanding />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/history" element={<History />} />
        <Route path="/author" element={<Author />} />
        <Route path="/character-quiz" element={<CharacterQuiz />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  </StrictMode>
)