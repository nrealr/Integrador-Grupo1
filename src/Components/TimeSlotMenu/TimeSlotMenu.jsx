import * as React from 'react';
import { MenuItem, Select} from '@mui/material';
import './TimeSlotMenu.styles.css'

const timeSlots = Array.from({ length: 12 }, (_, i) => {
  const startHour = 8 + i;
  const endHour = startHour + 1;
  const isAM = startHour < 12;
  const startHourLabel = `${startHour < 10? `0${startHour}` : startHour}:${isAM? '00 AM' : '00 PM'}`;
  const endHourLabel = `${endHour < 10? `0${endHour}` : endHour}:${isAM? '00 AM' : '00 PM'}`;
  return {
    label: `${startHourLabel} - ${endHourLabel}`,
    value: `${startHour < 10? `0${startHour}` : startHour}:${isAM? '00' : '00'}-${endHour < 10? `0${endHour}` : endHour}:${isAM? '00' : '00'}`,
  };
});

export const TimeSlotMenu = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState('');
  const [takenTimeSlots, setTakenTimeSlots] = React.useState([]); // store taken time slots from backend

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  const markTakenTimeSlots = (takenSlots) => {
    setTakenTimeSlots(takenSlots);
  };

  return (
    <div className='time-slot-component'>
      <Select className='select'
        value={selectedTimeSlot}
        onChange={handleTimeSlotChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select time slot' }}
      >
        <MenuItem value="" disabled className='text'>
          Select time slot
        </MenuItem>
        {timeSlots.map((timeSlot, index) => (
          <MenuItem className='slot-list'
            key={index}
            value={timeSlot.value}
            disabled={takenTimeSlots.includes(timeSlot.value)} // disable taken time slots
            style={{
              backgroundColor: takenTimeSlots.includes(timeSlot.value)? '#df7475' : '#e2edf1',
            }}
          >
            {timeSlot.label}
          </MenuItem>
        ))}
      </Select>
      {selectedTimeSlot && (
        <p>Selected time slot: {selectedTimeSlot}</p>
      )}
    </div>
  );
};

