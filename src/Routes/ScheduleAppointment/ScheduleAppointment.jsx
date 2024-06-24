import React, { useState, useEffect } from 'react';
import { scheduleAppointment } from '../../Services';


export const ScheduleAppointment = ({ doctorId, doctorName, patientId, selectedDate, selectedTimeSlot, location }) => {
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedTimeSlot) {
      setError('Time slot is not selected.');
      return;
    }

    const schedule = async () => {
      try {
        const startTime = `${selectedDate}T${selectedTimeSlot.start}`;
        const endTime = `${selectedDate}T${selectedTimeSlot.end}`;

        const result = await scheduleAppointment({
          doctorId,
          patientId,
          startTime,
          endTime,
        });

        setConfirmation(result);
      } catch (error) {
        setError(error.message);
      }
    };

    schedule();
  }, [doctorId, patientId, selectedDate, selectedTimeSlot]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!confirmation) {
    return <div>Booking your appointment...</div>;
  }

  return (
    <div>
      <h2>Appointment Confirmation</h2>
      <p>Doctor: {doctorName}</p>
      <p>Location: {location}</p>
      <p>Date: {selectedDate}</p>
      <p>Time: {selectedTimeSlot.start} - {selectedTimeSlot.end}</p>
      <p>Booking ID: {confirmation.id}</p>
    </div>
  );
};







