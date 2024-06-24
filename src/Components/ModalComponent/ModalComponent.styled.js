import { Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";


export const ModalContainer = styled(Dialog)`
  && {
    padding: 3px;
    border-radius: 1px;
  }
`;

export const ModalContent = styled(DialogContent)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;