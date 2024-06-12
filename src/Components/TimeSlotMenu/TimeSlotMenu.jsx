import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const timeSlots = Array.from({ length: 12 }, (_, i) => {
  const hour = 8 + i;
  return `${hour < 10 ? `0${hour}` : hour}:00`;
});

export const TimeSlotMenu = () => {
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  const handleStartTimeChange = (newStartTime) => {
    setStartTime(newStartTime);
  };

  const handleEndTimeChange = (newEndTime) => {
    setEndTime(newEndTime);
  };

  const isValidRange = () => {
    if (!startTime || !endTime) return false;
    const startHour = parseInt(startTime.format('HH'), 10);
    const endHour = parseInt(endTime.format('HH'), 10);
    return startHour < endHour;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <TimePicker
          label="Start Time"
          value={startTime}
          onChange={handleStartTimeChange}
          minutesStep={60}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="End Time"
          value={endTime}
          onChange={handleEndTimeChange}
          minutesStep={60}
          renderInput={(params) => <TextField {...params} />}
        />
        {isValidRange() ? (
          <p>Selected time range: {startTime.format('HH:mm')} - {endTime.format('HH:mm')}</p>
        ) : (
          <p>Please select a valid time range</p>
        )}
      </div>
    </LocalizationProvider>
  );
};
