import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import { SelectedTimeSlot, TimeSlot, TimeSlotList } from './TimeSlotMenu.styled';
import { Container } from '@mui/material';
import { availableSlots } from '../../Services';

export const TimeSlotMenu = ({ doctorId, selectedDate, onTimeSlotSelect }) => {
  const [availabilities, setAvailabilities] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAvailabilities = async () => {
      if (selectedDate && doctorId) {
        setLoading(true);
        setError(null);
        try {
          const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
          const response = await availableSlots(doctorId, formattedDate);
          setAvailabilities(response);
        } catch (error) {
          console.error('Error fetching availabilities:', error);
          setError('Failed to load availabilities');
          setAvailabilities([]);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAvailabilities();
  }, [doctorId, selectedDate]);

  const handleTimeSlotClick = (timeSlot) => {
    if (timeSlot.status === 'Available') {
      setSelectedTimeSlot(timeSlot);
      setIsTimeSelected(true);
      onTimeSlotSelect(timeSlot); // Llama a la función para pasar el timeSlot seleccionado
    }
  };

  const renderTimeSlots = () => {
    if (availabilities.length === 0) {
      return <p>No availabilities found for selected date.</p>;
    }

    const timeSlots = [];

    availabilities.forEach((availability) => {
      const { id, startTime, endTime, status } = availability;
      const startDateTime = dayjs(startTime);
      const endDateTime = dayjs(endTime);

      let currentHour = startDateTime;
      while (currentHour.isBefore(endDateTime)) {
        const formattedStartTime = currentHour.format('YYYY-MM-DDTHH:mm:ss');
        const nextHour = currentHour.add(1, 'hour');
        const formattedEndTime = nextHour.isBefore(endDateTime)? nextHour.format('YYYY-MM-DDTHH:mm:ss') : endDateTime.format('YYYY-MM-DDTHH:mm:ss');
        
        const timeSlot = {
          id: `${id}_${formattedStartTime}_${formattedEndTime}`,
          startTime: formattedStartTime,
          endTime: formattedEndTime,
          status: status
        };

        timeSlots.push(timeSlot);
        currentHour = nextHour;
      }
    });

    return (
      <TimeSlotList>
        {timeSlots.map((timeSlot) => (
          <TimeSlot
            key={timeSlot.id}
            onClick={() => handleTimeSlotClick(timeSlot)}
            status={timeSlot.status}
            className={selectedTimeSlot && selectedTimeSlot.id === timeSlot.id? 'elected' : ''}
          >
            {`${dayjs(timeSlot.startTime).format('HH:mm')} - ${dayjs(timeSlot.endTime).format('HH:mm')}`}
          </TimeSlot>
        ))}
      </TimeSlotList>
    );
  };

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {renderTimeSlots()}
      <SelectedTimeSlot isSelected={isTimeSelected}>
        Time selected: {isTimeSelected? `${dayjs(selectedTimeSlot.startTime).format('HH:mm')} - ${dayjs(selectedTimeSlot.endTime).format('HH:mm')}` : ''}
      </SelectedTimeSlot>
    </Container>
  );
};

