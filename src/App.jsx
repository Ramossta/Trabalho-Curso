
import {Routes, Route, Link} from 'react-router-dom';
import Inicial from './Pages/Inicial';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';

export default function App() {
  return (
    <>
      <nav>
        {/* Navigates to the homepage */}
        <Link to="/">Inicial</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>

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
      </Routes>
    </>
  );
}


