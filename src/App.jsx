import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Homepage } from './pages/Homepage/Homepage'
import { Header } from './components/Header/Header'
import { CreateArticles } from './pages/CreateArticles/CreateArticles'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/articles/:id" element={<Homepage />}/>
        </Route>
        <Route path="/create-article" element={<CreateArticles />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
