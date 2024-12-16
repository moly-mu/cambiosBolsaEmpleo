import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  // Si el usuario está autenticado, muestra los 'children' (páginas protegidas)
  // Si no está autenticado, redirige a la página de inicio de sesión
  return isAuthenticated ? children : <Navigate to="/insesion" />;
};

// Definir las PropTypes para el componente ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // 'children' es un nodo React y es requerido
  isAuthenticated: PropTypes.bool.isRequired, // isAuthenticated debe ser un booleano
};

export default ProtectedRoute;
