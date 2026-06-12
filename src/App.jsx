
import {Routes, Route, Link} from 'react-router-dom';
import Inicial from './Pages/Inicial';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Planos from './Pages/Planos';
import Principal from './Pages/Principal';

export default function App() {
  return (
    <>
      <nav>
        {/* Navigates to the homepage */}
        <Link to="/">Inicial</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/principal">Principal</Link>

        <br />
        {/* Navigates to the about page */}
       
      </nav>

      {/* Você precisa definir ONDE as páginas vão aparecer 
        quando você clicar nos links acima:
      */}
      <Routes>
        <Route path="/" element={<Inicial />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/principal" element={<Principal />} />
        
      </Routes>
    </>
  );
}


