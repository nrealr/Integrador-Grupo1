import { useState } from 'react';
import styled from 'styled-components';

const TimeSlotList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const TimeSlot = styled.li`
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 0;
  cursor: pointer;
  &.selected {
    background-color: #df7475;
  }
`;

const SelectedTimeSlot = styled.div`
  font-weight: bold;
  color: #333;
  text-align: center;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc
`;

export const TimeSlotMenu = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };


  const slotList = Array.from({ length: 11});
  
  return (

    <div>
      <TimeSlotList>
        {
          slotList.map((_, i) => {
            const startHour = 8 + i;
            const endHour = startHour + 1;
            const timeSlot = `${startHour < 10 ? `0${startHour}` : startHour}:00-${endHour < 10 ? `0${endHour}` : endHour}:00`;
            return (
              <TimeSlot
                key={timeSlot}
                data-time-slot={timeSlot}
                onClick={() => handleTimeSlotClick(timeSlot)}
                className={selectedTimeSlot === timeSlot ? 'elected' : ''}
              >
                {timeSlot}
              </TimeSlot>
            );
          })
        }
      </TimeSlotList>
      <SelectedTimeSlot>
        {selectedTimeSlot && `Time selected: ${selectedTimeSlot}`}
      </SelectedTimeSlot>

    </div>

  );
};
