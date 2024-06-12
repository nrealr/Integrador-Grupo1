import * as React from 'react';
import { MenuItem, Select, TextField } from '@mui/material';

const timeSlots = Array.from({ length: 12 }, (_, i) => {
  const startHour = 8 + i;
  const endHour = startHour + 1;
  return {
    label: `${startHour < 10? `0${startHour}` : startHour}:00 - ${endHour < 10? `0${endHour}` : endHour}:00`,
    value: `${startHour < 10? `0${startHour}` : startHour}:00-${endHour < 10? `0${endHour}` : endHour}:00`,
  };
});

export const TimeSlotMenu = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState('');

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  return (
    <div>
      <Select
        value={selectedTimeSlot}
        onChange={handleTimeSlotChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select time slot' }}
      >
        <MenuItem value="" disabled>
          Select time slot
        </MenuItem>
        {timeSlots.map((timeSlot, index) => (
          <MenuItem key={index} value={timeSlot.value}>
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
