import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@mui/material';
import './ShareButton.styles.css'

export const ShareButton = () => {

    return (

        <Button className='shareInfo'
            size="small"
            startIcon=
            {<ShareIcon fontSize="small" color='primary' />}
            alt="shareInformation">
            Share
        </Button>

    )

}