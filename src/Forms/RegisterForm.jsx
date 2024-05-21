import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // ver como enviar los datos del form a la API
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography variant="h6">Registro de Usuario</Typography>
        <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Nombre"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            autoComplete="given-name"
        />
        <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Apellido"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            autoComplete="family-name"
        />
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
        />
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color='secondary'
            sx={{ mt: 2 }}
        >
            Registrarse
        </Button>
        </Box>
    );
};
