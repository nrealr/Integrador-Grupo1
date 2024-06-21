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
  background-color: #61c0bb;
  padding: 24px;
  border-right: none; /* remover border-right */
  font-size: 1rem;
  font-weight: bolder;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 12px 24px; /* espacio entre texto y borde */
    cursor: pointer; /* cursor de mano para indicar que es un botón */
  }
  li:hover {
    background-color: #bfe5e7; /* color de fondo al hacer hover */
  }
  a {
    text-decoration: none; /* quitar subrayado en enlaces */
    color: #333; /* color de texto de los enlaces */
  }
  a:hover {
    color: #333; /* mantener color de texto al hacer hover */
  }
`;

export const ProfileContent = styled.div`
  flex-grow: 1;
  padding: 24px;
  overflow-y: auto; /* agregar scroll si el contenido es demasiado grande */
`;