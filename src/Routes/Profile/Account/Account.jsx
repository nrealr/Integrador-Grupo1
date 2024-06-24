import React from 'react';
import { Grid } from '@mui/material';
import { AccountContainer, AccountLabel, AccountValue, } from './Account.styled';
import { useDoctorStates } from '../../../Context';

export const Account = () => {
  const { currentUser } = useDoctorStates();

  return (
    <AccountContainer>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AccountLabel variant="h6">Nombre</AccountLabel>
        </Grid>
        <Grid item xs={6}>
          <AccountValue variant="body1">{currentUser.name}</AccountValue>
        </Grid>

        <Grid item xs={6}>
          <AccountLabel variant="h6">Apellido</AccountLabel>
        </Grid>
        <Grid item xs={6}>
          <AccountValue variant="body1">{currentUser.lastname}</AccountValue>
        </Grid>

        <Grid item xs={6}>
          <AccountLabel variant="h6">Correo electrónico</AccountLabel>
        </Grid>
        <Grid item xs={6}>
          <AccountValue variant="body1">{currentUser.email}</AccountValue>
        </Grid>

        {/* Agrega más campos aquí */}
      </Grid>
    </AccountContainer>
  );
};