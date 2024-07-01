import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";


export const FeaturesCardGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  align-items: stretch;
  margin: 0 auto;
  width: 80%;
`;

export const FeaturesMainCard = styled(Card)`
  border-radius: 10px;
  flex: 1;
  margin: 20px;
  border: 0.3rem solid #62c0bb;
  transition: transform 0.3s, background-color 0.3s;
  grid-column: span 1;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  box-shadow: 0px 2px 4px rgba(100, 192, 187, 0.5);
`;

export const FeaturesCardIcon = styled('img')`
  width: 25%;
  height: auto;
  margin: 20px;
`;

export const FeaturesCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  height: 70px;
  width: 200px;
`;

export const FeaturesCardTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 10px;
  color: #102C5B;
  text-align: center;
  line-height: normal;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
  cursor: default;
`;

export const FeaturesCardDescription = styled(Typography)`
  font-size: 0.5rem;
  color: #666;
  font-weight: bold;
  text-align: center;
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  grid-auto-flow: dense;
  padding: 40px;
`;