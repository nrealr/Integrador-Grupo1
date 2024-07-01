import ShareIcon from '@mui/icons-material/Share';
import { Box, Button } from '@mui/material';
import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from 'react-share';
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './ShareButton.styles.css'

export const ShareButton = ({ url, title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'space-between',
        padding: '0px 5px',
        borderRadius: '5px',
        backgroundColor: '#B9E2E1',
        cursor: 'pointer',
        height: '30px',
        width: '140px',
        marginRight: 'auto',
      }}>
      <Button className='shareInfo'
        size="small"
        startIcon={<ShareIcon fontSize="small" color='primary' />}
        alt="shareInformation"
        sx={{ minWidth: 20 }}
        // disabled
      >
      </Button>
      <WhatsappShareButton url={url} title={title}>
        <WhatsAppIcon />
      </WhatsappShareButton>
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedInIcon />
      </LinkedinShareButton>
    </Box>
  )
};
