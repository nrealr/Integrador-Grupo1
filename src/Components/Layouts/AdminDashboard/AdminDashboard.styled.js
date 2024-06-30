import { Link } from "react-router-dom";
import styled from "styled-components";


export const AdminPanel = styled.div`
  display: flex;
  padding: 0;
`;

export const AdminSelect = styled.div`
  background-color: #f1f1f1;
  padding-right: 5rem;
`;

export const AdminSelectOption = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const AdminOptions = styled.div`
  display: flex;
`;

export const AdminLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
`;