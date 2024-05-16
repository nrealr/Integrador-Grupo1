import React, { useState } from 'react'


export const DeleteProductFunction = ({ doctor, onDelete }) => {

    const [confirmation, setConfirmation] = useState(false);

    const handleDeleteClick = () => {
        setConfirmation(true);
    }

    const handleAcceptConfirmation = () =>{
        onDelete(doctor);
        setConfirmation(false)
    }

    const handleCancelConfirmation = () => {
        setConfirmation(false);
    }

    return(
    <div>
      <button onClick={handleDeleteClick}><img className="trashcan" src="https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png" alt="Delete" /></button>
      {confirmation && (
        <div className="popup">
          <p>Are you sure you want to delete this doctor?</p>
          <button onClick={handleAcceptConfirmation}>Accept</button>
          <button onClick={handleCancelConfirmation}>Cancel</button>
        </div>
      )}
    </div>
    )
}