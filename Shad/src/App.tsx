import './App.css'
import Page from './components/page'
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/dashboard" element={<Page />} />
      <Route path='/' element={<Login />} />
    </Routes>
  </Router>
  )
}

export default App
