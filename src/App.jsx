
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Card from './components/card/Card'
import Header from './components/header/Header'
import Table from './components/table/Table'

function App() {



 return (
    <BrowserRouter>

      {/* Always visible */}
      <Header />

      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/table" element={<Table />} />
      </Routes>

    </BrowserRouter>
  
  )
}

export default App
