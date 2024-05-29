import axios from "axios";
import { useHistory } from "react-router-dom"; // o useNavigate si usas react-router-dom v6

const useLogout = () => {
  const history = useHistory(); // o const navigate = useNavigate() si usas react-router-dom v6

  const logout = async (token) => {
    try {
      // Envía el token al servidor para cerrar la sesión
      await axios.post(
        "/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Opcional: Limpiar el token del almacenamiento local/estado de la aplicación
      localStorage.removeItem("token"); // o sessionStorage, dependiendo de dónde almacenes el token

      // Redirigir al usuario a la página de inicio de sesión
      history.push("/login"); // o navigate('/login') si usas react-router-dom v6
    } catch (error) {
      console.error("Error during logout:", error);
      // Opcional: Manejar el error (mostrar un mensaje al usuario, etc.)
    }
  };

  return logout;
};

export default useLogout;
