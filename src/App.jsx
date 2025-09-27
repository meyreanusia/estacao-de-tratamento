import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
// import Estacoes from './pages/Estacoes';

function App() {

  return (
    <>
  <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/estacoes" element={<Estacoes />} /> */}
    </Routes>
    </>
  )
}

export default App
