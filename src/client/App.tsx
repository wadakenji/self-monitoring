import { Routes, Route } from 'react-router-dom'
import './App.css'
import PageTraining from './pages/training'
import PageIndex from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageIndex />} />
      <Route path="/training" element={<PageTraining />} />
    </Routes>
  )
}

export default App
