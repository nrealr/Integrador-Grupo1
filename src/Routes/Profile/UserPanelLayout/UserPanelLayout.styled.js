import { styled } from 'styled-components';


export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding-top: 64px; /* ajustar la padding para que no tope con el navbar */;
`;


export const ProfileAside = styled.aside`
  width: 240px;
  flex-shrink: 0;
  background-color: #17315a;
  padding: 24px;
  border-right: none; /* remover border-right */
  font-size: 1rem;
  font-weight: bolder;
  color: white;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

  }
  li {
    padding: 12px 24px; /* espacio entre texto y borde */
    cursor: pointer; /* cursor de mano para indicar que es un botón */
    display: flex; /* agregar display flex para alinear icono y texto */
    align-items: center; /* alinear icono y texto verticalmente */
  
  }
  li:hover {
    background-color: #28426a; /* color de fondo al hacer hover */
  }
  a {
    text-decoration: none; /* quitar subrayado en enlaces */
    color: white; /* color de texto de los enlaces */
    display: flex; /* agregar display flex para alinear icono y texto */
    align-items: center; /* alinear icono y texto verticalmente */
  }
  a:hover {
    color: #61c0bb; /* mantener color de texto al hacer hover */
  }
   /* agregar estilos para el icono */
 .MuiSvgIcon-root { /* clase de Material-UI para los iconos */
    font-size: 24px; /* tamaño del icono */
    margin-right: 8px; /* espacio entre icono y texto */
    color: white; /* color del icono */

}

/* media query para pantallas pequeñas */

@media (max-width: 768px) {
width: calc(24px + 16px); /* ancho del contenedor = tamaño del icono + padding */
padding: 12px; /* reducir padding para que quepan solo los iconos */
margin: 0 8px 0 0; /* agregar margen para centrar el icono */
li {
  padding: 12px; /* reducir padding para que quepan solo los iconos */
  justify-content: center; /* centrar el icono horizontalmente */
}
span { /* ocultar texto en pantallas pequeñas */
  display: none!important;
}

}
`;

export const ProfileContent = styled.div`
  flex-grow: 1;
  padding: 24px;
  overflow-y: auto; /* agregar scroll si el contenido es demasiado grande */
`;