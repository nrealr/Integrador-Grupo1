import React, { useState } from 'react'


export const DeleteProductFunction = ({ item, onDelete }) => {

    const [confirmation, setConfirmation] = useState(false);

    const handleDeleteClick = () => {
        setConfirmation(true);
    }

    const handleAcceptConfirmation = () =>{
        onDelete(item);
        setConfirmation(false)
    }

    const handleCancelConfirmation = () => {
        setConfirmation(false);
    }

    return(
    <div>
      <p className="admin-delete-button" onClick={handleDeleteClick}>🗑</p>
      {confirmation && (
        <div className="popup">
          <p>Are you sure you want to delete this item?</p>
          <button onClick={handleAcceptConfirmation}>Accept</button>
          <button onClick={handleCancelConfirmation}>Cancel</button>
        </div>
      )}
    </div>
    )
}