import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import About from './pages/About'
import Index  from './pages/Index'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
