// src/components/Register.jsx
import { useState } from 'react';

const Reg = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes manejar el registro del usuario, validaciones, etc.
    alert('Registro exitoso');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-xl rounded-lg max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Crear cuenta</h2>
        <input 
          type="text" 
          placeholder="Usuario" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="mb-4 p-2 border rounded w-full"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="mb-4 p-2 border rounded w-full"
        />
        <button 
          onClick={handleRegister} 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Reg;
