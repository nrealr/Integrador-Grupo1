
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

export const ShareButton = () => {
  const url = 'https://www.example.com/share'; // Reemplaza con la URL que deseas compartir
  const title = 'Compartir información'; // Reemplaza con el título que deseas compartir

  return (
    <Box

      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        borderRadius: '8px',
        backgroundColor: '#f7f7f7', // Fondo gris claro
        cursor: 'pointer',
      }}>
      <Button className='shareInfo'
        size="small"
        startIcon={<ShareIcon fontSize="small" color='primary' />}
        alt="shareInformation">
          </Button>
        <WhatsappShareButton url={url} title={title}>
          <WhatsAppIcon />
        </WhatsappShareButton>
        <FacebookShareButton url={url} title={title}>
          <FacebookIcon />
        </FacebookShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedInIcon />
        </LinkedinShareButton>
      </Box>
  )
};
