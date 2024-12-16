import { useNavigate } from 'react-router-dom';

const PagP = () => {
  const navigate = useNavigate();

  // Redirigir a las diferentes páginas cuando el usuario haga clic en los botones
  const handleLoginRedirect = () => {
    navigate('/insesion');
  };

  const handleRegisterRedirect = () => {
    navigate('/reg');
  };

  const handleCompanyRedirect = () => {
    navigate('/pagiem'); // Página para empresas
  };

  const handleAdminRedirect = () => {
    navigate('/pagiad'); // Página para administradores
  };

  console.log('PagP component is rendering'); // Esto te ayudará a saber si el componente se está renderizando

  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">App Nombre</h1>
          <div className="space-x-4">
            <button 
              onClick={handleLoginRedirect} 
              className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
              Iniciar sesión
            </button>
            <button 
              onClick={handleRegisterRedirect} 
              className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
              Registrarse
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <div className="flex justify-center items-center h-full">
        <div className="text-center p-6 bg-white shadow-xl rounded-lg max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a la App</h1>
          <p className="text-xl mb-6">Por favor, selecciona una opción para continuar.</p>

          {/* Botones de acción debajo del texto */}
          <div className="space-y-4">
            <button 
              onClick={handleLoginRedirect} 
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 w-full">
              Iniciar sesión
            </button>
            <button 
              onClick={handleRegisterRedirect} 
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 w-full">
              Registrarse
            </button>
            <button 
              onClick={handleAdminRedirect} 
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 w-full">
              Iniciar como Administrador
            </button>
            <button 
              onClick={handleCompanyRedirect} 
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 w-full">
              Iniciar como Empresa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagP;
