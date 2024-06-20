
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
  background-color: #f7f7f7;
  border-right: 1px solid #ddd;
  padding: 24px;
`;

export const ProfileContent = styled.div`
  flex-grow: 1;
  padding: 24px;
`;