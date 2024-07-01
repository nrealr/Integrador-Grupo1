import React from 'react';
import { ModalContainer, ModalContent } from './ModalComponent.styled';
import { Avatar, Box, Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircleOutlineOutlined, Error } from '@mui/icons-material';

export const ConfirmationModal = ({ isOpen, onClose, message, error, redirectUrl, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer open={isOpen} onClose={onClose}>
      <ModalContent>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ m: 1, bgcolor: error ? 'error.main' : 'primary.main' }}>
              {error ? <Error /> : <CheckCircleOutlineOutlined />}
            </Avatar>
            <DialogTitle>{error ? 'Error' : 'Please confirm'}</DialogTitle>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            <Typography variant='body1'>{message}</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={onConfirm} color={error ? 'error' : 'primary'}>
            {error ? 'OK' : 'Continue'}
          </Button>
          <Link to={redirectUrl}>
            <Button variant='outlined' onClick={onClose} color='primary'>
              Cancel
            </Button>
          </Link>
        </DialogActions>
      </ModalContent>
    </ModalContainer>
  );
};
