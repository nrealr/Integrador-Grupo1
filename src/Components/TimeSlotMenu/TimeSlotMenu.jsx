import { useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { availableSlots } from '../../Services';

const Container = styled.div`
  width: 200px;
  margin: 0 auto;
`;

const TimeSlotList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const TimeSlot = styled.li`
  background-color: ${({ status }) => (status === 'available' ? 'white' : '#ccc')};
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px;
  cursor: ${({ status }) => (status === 'available' ? 'pointer' : 'not-allowed')};
  width: 100%;
  text-align: center;
  &:hover {
    background-color: ${({ status }) => (status === 'available' ? '#8ecae6' : '#a3a3a3')};
  }
`;

const SelectedTimeSlot = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  min-height: 60px;
  ${({ isSelected }) => isSelected && 'color: red;'}
`;

export const TimeSlotMenu = ({ doctorId, selectedDate }) => {
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
        const formattedEndTime = nextHour.isBefore(endDateTime) ? nextHour.format('YYYY-MM-DDTHH:mm:ss') : endDateTime.format('YYYY-MM-DDTHH:mm:ss');
        
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
            className={selectedTimeSlot && selectedTimeSlot.id === timeSlot.id ? 'selected' : ''}
          >
            {`${dayjs(timeSlot.startTime).format('HH:mm')} - ${dayjs(timeSlot.endTime).format('HH:mm')}`}
          </TimeSlot>
        ))}
      </TimeSlotList>
    );
  };

  const handleTimeSlotClick = (timeSlot) => {
    if (timeSlot.status === 'available') {
      setSelectedTimeSlot(timeSlot);
      setIsTimeSelected(true);
    }
  };

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {renderTimeSlots()}
      <SelectedTimeSlot isSelected={isTimeSelected}>
        Time selected: {isTimeSelected ? `${dayjs(selectedTimeSlot.startTime).format('HH:mm')} - ${dayjs(selectedTimeSlot.endTime).format('HH:mm')}` : ''}
      </SelectedTimeSlot>
    </Container>
  );
};



