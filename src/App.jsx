import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PagP from './components/PagP'; // Página principal
import Insesion from './components/Insesion'; // Página de inicio de sesión
import Reg from './components/Reg'; // Página de registro
import Pagiem from './components/Empresa/Pagiem'; // Página para empresas
import Pagiad from './components/Administrador/Pagiad'; // Página para administradores
import ProtectedRoute from './components/ProtectedRoute'; // Ruta protegida
import Cards from './components/desis/dashb.jsx/Cards';
import Noti from './components/desis/dashb.jsx/Noti';
import Ofertas from './components/desis/dashb.jsx/Ofertas';
import Barral from './components/desis/dashb.jsx/Barral';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Almacenar el estado de autenticación en el localStorage
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="flex h-screen">
        {/* Solo mostrar la sidebar si el usuario está autenticado */}
        {isAuthenticated && <Barral />}

        <div className="flex-1">
          <Routes>
            {/* Ruta principal que muestra PagP */}
            <Route path="/" element={<PagP />} />

            {/* Página de inicio de sesión */}
            <Route path="/insesion" element={<Insesion />} />

            {/* Página de registro */}
            <Route path="/reg" element={<Reg />} />

            {/* Página de empresa */}
            <Route path="/pagiem" element={<Pagiem />} />

            {/* Página de administrador */}
            <Route path="/pagiad" element={<Pagiad />} />

            {/* Rutas protegidas que requieren autenticación */}
            <Route
              path="/home"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Cards />
                </ProtectedRoute>
              }
            />
            <Route
              path="/noti"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Noti />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ofertas"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Ofertas />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
