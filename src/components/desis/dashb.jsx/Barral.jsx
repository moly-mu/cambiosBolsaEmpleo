import { useState } from "react";
import { Link } from "react-router-dom";  // Asegúrate de importar Link
import { Profile2User, Document, Calendar, Setting2 } from 'iconsax-react'; // Agrega tus íconos preferidos

const Barral = () => {
  const [isOpen, setIsOpen] = useState(true); // Controla si el sidebar está abierto o cerrado

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna el estado del sidebar
  };

  return (
    <div className="flex h-screen">
      {/* Botón para alternar el estado del sidebar */}
      <button
        onClick={toggleSidebar}
        className="p-2 bg-blue-500 text-white rounded-lg m-4 md:hidden"
      >
        {isOpen ? "Cerrar Sidebar" : "Abrir Sidebar"}
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 h-screen bg-white border-r fixed top-0 left-0 z-50 transform transition-transform duration-300 ${isOpen ? "transform-none" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Sección superior */}
          <div className="h-[var(--h-nav)] p-4 flex items-center gap-2 cursor-pointer">
            <div className="h-10 w-10 flex items-center justify-center bg-gradient-to-br from-violet-500 to-violet-400 rounded-full text-white">
              <Profile2User size={24} />
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-800">UDC TALENTO</h1>
             
            </div>
          </div>

          <hr className="bg-gray-400 mx-2" />

          {/* Menú de navegación */}
          <div className="flex flex-col space-y-2 text-gray-500 font-medium text-xs py-6 overflow-y-auto">
            <Link to="/" className="flex hover:bg-gray-100 px-6 py-2 items-center gap-2">
              <Profile2User size={16} />
              Mi perfil
            </Link>

            <Link to="/noti" className="flex hover:bg-gray-100 px-6 py-2 items-center gap-2">
              <Calendar size={16} />
              Notificaciones
            </Link>

            <Link to="/ofertas" className="flex hover:bg-gray-100 px-6 py-2 items-center gap-2">
              <Document size={16} />
              Ofertas
            </Link>

            <Link to="/settings" className="flex hover:bg-gray-100 px-6 py-2 items-center gap-2">
              <Setting2 size={16} />
              Configuración
            </Link>
          </div>

          {/* Sección inferior con el perfil del usuario (Fija en la parte inferior) */}
          <div className="mt-auto p-6 border-t">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <Profile2User size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Nombre Usuario</p>
                <p className="text-xs text-gray-500">usuario@correo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 pl-60"></div>
    </div>
  );
};

export default Barral;
