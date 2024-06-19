import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Homepage } from './pages/Homepage/Homepage'
import { Header } from './components/Header/Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
