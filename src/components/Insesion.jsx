// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Insesion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulación de autenticación
    if (username === 'admin' && password === '1234') {
      // Guardamos que el usuario está autenticado (por ejemplo, en localStorage o un estado global)
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');  // Redirigir a la página principal (Cards)
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Insesion;
