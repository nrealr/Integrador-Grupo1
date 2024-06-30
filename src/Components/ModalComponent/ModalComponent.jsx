import React from 'react';
import { ModalContainer, ModalContent } from './ModalComponent.styled';
import { Avatar, Box, Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircleOutlineOutlined, Error } from '@mui/icons-material';


// Componente ModalComponent que recibe props isOpen, onClose, message, error y redirectUrl
export const ModalComponent = ({ isOpen, onClose, message, error, redirectUrl }) => {

  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) return null;

  // Renderizamos el modal con los estilos personalizados

  return (
    <ModalContainer open={isOpen} onClose={onClose}>
      <ModalContent>
        {/* Contenido del modal */}
        <DialogContent>
          {/* Avatar con icono de éxito o error */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ m: 1, bgcolor: error ? 'error.main' : 'primary.main' }}>
              {error ? <Error /> : <CheckCircleOutlineOutlined />}
            </Avatar>
            {/* Título del modal con texto de éxito o error */}
            <DialogTitle>{error ? 'Error' : 'Success'}</DialogTitle>
          </Box>
          {/* Mensaje del modal */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            <Typography variant='body1'>{message}</Typography>
          </Box>
        </DialogContent>
        {/* Acciones del modal */}
        <DialogActions>
          {/* Botón para cerrar el modal y redirigir a otra página */}
          <Link to={redirectUrl}>
            <Button variant='outlined' onClick={onClose} color={error ? 'error' : 'primary'}>
              {error ? 'OK' : 'Continue'}
            </Button>
          </Link>
        </DialogActions>
      </ModalContent>
    </ModalContainer>
  );
};