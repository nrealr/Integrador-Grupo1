import { Link } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from "@mui/material";
import './icnReturnHome.styles.css'

export const IcnReturnHome=()=> {
    return (
        <Button className="IcnReturnHome">
        <Link to={`/`}>
            <KeyboardReturnIcon/>
        </Link>
        </Button>
  
    );
  }