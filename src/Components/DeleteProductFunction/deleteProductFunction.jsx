import React, { useState } from 'react'

const deleteProductFuction = () => {
    const [confirmation, setConfirmation] = useState(false);

    const handleSubmit = (e) {
        e.preventDefault();
        setConfirmation(true);
    }

    const handleAcceptConfirmation = () =>{
        
    }
}