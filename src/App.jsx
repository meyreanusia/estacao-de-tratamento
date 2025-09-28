import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Estacoes from './pages/EstacoesTratamento';
import CadastroEstacoes from './pages/CadastroEstacaoTratamento'

function App() {

  return (
    <>
  <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/estacoes" element={<Estacoes />} />
      <Route path="/cadastro-estacoes" element={<CadastroEstacoes />} />
    </Routes>
    </>
  )
}

export default App
