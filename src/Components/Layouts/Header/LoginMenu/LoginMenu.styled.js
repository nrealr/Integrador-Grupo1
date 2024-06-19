import MenuListUI from "@mui/material/MenuList";
import styled from "styled-components";
import TextFieldUI from "@mui/material/TextField";


export const MenuList = styled(MenuListUI)`
    width: 300px;
    color: white;
    padding: 10px;
    background-color: #314e6f;
    margin-top: 15px;
`;

export const TextField = styled(TextFieldUI)`
    margin-bottom: 10px;
    color: white;
    input {
        background-color: white;
        border-radius: 15px;
    };
    

`;
