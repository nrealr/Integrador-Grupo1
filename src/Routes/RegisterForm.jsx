import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Avatar, Grid } from '@mui/material';
import LockOutLinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { addUser } from '../Services';

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState({});
    const [success, setSuccess] = useState("");

    const validateForm = (values) => {
        let errors = {};

        if (!values.firstName) {
            errors.firstName = 'First Name field is mandatory';
        }

        if (!values.lastName) {
            errors.lastName = 'Last Name field is mandatory';
        }

        if (!values.email) {
            errors.email = 'Email is mandatory';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email format not valid';
        }

        if (!values.password) {
            errors.password = 'Password is mandatory';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await addUser(formData);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                });
                setError({});
                setSuccess("User registered successfully");
            } catch (error) {
                console.error("Error on sending data:", error);
                setError(["Error registering user"]);
            }
        } else {
            setError(validationErrors)
        }
    };

    return (
        <Container component="main" maxWidth="xs" >
            <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
            }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}} >
                    <LockOutLinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">Sign Up</Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                autoComplete="given-name"
                                error={!!error.firstName}
                                helperText={error.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                autoComplete="family-name"
                                error={!!error.lastName}
                                helperText={error.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                error={!!error.email}
                                helperText={error.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                                error={!!error.password}
                                helperText={error.password}
                            />
                        </Grid>
                    </Grid>
                
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color='secondary'
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                    <Grid container justifyContent="flex-end" marginTop={2}>
                        <Link href="#" variant="body2">
                            Already have an account? Sign In
                        </Link>
                    </Grid>
                </Box>
                {Object.keys(error).length > 0 && (
                    <Box sx={{ color: 'red', mt: 2 }}>
                        {Object.values(error).map((errMsg, index) => (
                            <Typography key={index} variant="body2">{errMsg}</Typography>
                        ))}
                    </Box>
                )}
                {success && (
                    <Box sx={{ color: 'green', mt: 2 }}>
                        <Typography variant="body2">{success}</Typography>
                    </Box>
                )}
            </Box>
            
        </Container>
        
    );
};
