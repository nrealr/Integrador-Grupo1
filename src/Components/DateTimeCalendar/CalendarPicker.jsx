import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarPicker.styles.css'



const availableTimes = [
  '09:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00'
];

const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time selection when changing date
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const isWeekday = (date) => {
    if (!date) return false; // Handle case when date is null or undefined
    const day = date.getDay();
    return day !== 0 && day !== 6; // Exclude weekends
  };

  return (
    <div className="calendar-picker">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        filterDate={isWeekday}
        inline
        className="date-picker"
      />
      <div className="time-picker">
        <h3>Seleccione una hora:</h3>
        <div className="time-buttons">
          {availableTimes.map(time => (
            <button
              key={time}
              className={`time-button ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => handleTimeChange(time)}
              disabled={!isWeekday(selectedDate)} // Disable if not a weekday
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      {selectedDate && selectedTime && (
        <div className="selected-info">
          <h3>Fecha seleccionada:</h3>
          <p>{`${selectedDate.toLocaleDateString()} ${selectedTime}`}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarPicker;