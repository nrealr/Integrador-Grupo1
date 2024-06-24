
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Avatar, Grid, Paper, Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';
import LockOutLinedIcon from '@mui/icons-material/LockOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../Services';
import { ROUTES } from '../../Constants';
import { addUser } from '../../Services/Users/addUser';
import { UserStore } from '../../Utils/UserStore/UserStore';
import { ModalComponent } from '../../Components/ModalComponent';


export const RegisterForm = () => {

    const [formData, setFormData] = useLocalStorage('formData', {
        name: '',
        lastname: '',
        email: '',
        password: '',
    });


    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);
    const userStore = UserStore();

    const validateForm = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = 'First Name field is mandatory';
        } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(values.name)) {
            errors.name = 'This field accept letters and spaces only';
        }

        if (!values.lastname) {
            errors.lastname = 'Last Name field is mandatory';
        } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(values.lastname)) {
            errors.lastname = 'This field accept letters and spaces only';
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
                setSuccess(true);
                const response = await addUser(formData);
                userStore.addUser(response.id, formData);
                console.log(UserStore);
                setFormData({
                    name: '',
                    lastname: '',
                    email: '',
                    password: '',
                });
                setError({});
            } catch (error) {
                console.error("Error on sending data:", error);
                setError(["Error registering user"]);
            }
        } else {
            setError(validationErrors);
        }
    };

    return (
        <>
            <Box sx={{ width: '100%', height: { xs: '120px', sm: '200px' }, backgroundColor: 'primary.main' }}></Box>
            <Container component="main" maxWidth="lg" sx={{ mt: -8 }} >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                >
                    <Paper sx={{ p: 3, borderRadius: 1, width: '100%', maxWidth: '600px' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }} >
                            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} >
                                <LockOutLinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">Sign Up</Typography>
                        </Box>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            <Grid container spacing={1} >
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="First Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="given-name"
                                        error={!!error.name}
                                        helperText={error.name}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="lastname"
                                        label="Last Name"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        autoComplete="family-name"
                                        error={!!error.lastname}
                                        helperText={error.lastname}
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
                                sx={{ mt: 2, color: 'white' }}
                            >
                                Submit
                            </Button>

                            <Grid container display='flex' flexDirection='column' justifyContent="flex-end" marginTop={2}>
                                <Link to={ROUTES.LOGIN} variant="body2">
                                    Already have an account? Sign In
                                </Link>
                                <Typography variant='caption text' marginTop={2} color='primary.main' >
                                    * Fields are required
                                </Typography>
                            </Grid>
                        </Box>
                    </Paper>
                </Box>

            </Container>
            {success && (

                <ModalComponent
                    isOpen={success}
                    onClose={() => setSuccess(false)}
                    message="User Registered Successfully"
                    error={false}
                    redirectUrl={ROUTES.HOME}
                />

            )}
        </>
    );
};