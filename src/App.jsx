
import {Routes, Route, Link} from 'react-router-dom';
import Inicial from './Pages/Inicial';

export default function App() {
  return (
    <>
      <nav>
        {/* Navigates to the homepage */}
        <Link to="/">Inicial</Link>
        
        <br />
        {/* Navigates to the about page */}
       
      </nav>

      {/* Você precisa definir ONDE as páginas vão aparecer 
        quando você clicar nos links acima:
      */}
      <Routes>
        <Route path="/" element={<Inicial />} /> 
        
      </Routes>
    </>
  );
}


