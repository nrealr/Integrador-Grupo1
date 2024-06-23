import React from 'react';
import { Stepper, Step, StepLabel, Box, StepIcon } from '@mui/material';

const steps = ['1. Search', '2. Select', '3. Confirm'];

export const BookingStepper = ({ activeStep }) => {
    return (
        <Box
        sx={{
            width: '100%',
            marginBottom: 0,
            marginTop: 0,
            backgroundColor: 'primary.light',
            padding: '16px',
            
        }}
        >
        <Stepper 
            activeStep={activeStep} 
            alternativeLabel
            >
            {steps.map((label) => (
            <Step key={label}>
                <StepLabel
                sx={{
                    '& .MuiStepLabel-label': {
                    color: 'white', // Change font color
                    },
                    '& .MuiStepIcon-root': {
                    fontSize: '2.5rem', // Increase the size of the icon
                    },
                    '& .MuiStepIcon-root.Mui-active': {
                    color: 'secondary.main', // Active step icon color
                    },
                    '& .MuiStepIcon-root.Mui-completed': {
                    color: 'primary.main', // Completed step icon color
                    },
                    '& .MuiStepIcon-text': {
                    fill: 'white', // Step number color
                    },
                }}
                >
                {label}
                </StepLabel>
            </Step>
            ))}
        </Stepper>
        </Box>
    );
};
