import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { StaticDatePicker } from './BookingCalendar.styled';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export const BookingCalendar = ({ availableDays, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {

    const formattedAvailableDays = availableDays.map(dateStr => dayjs(dateStr).format('YYYY-MM-DD'));
    
    const startOfMonth = dayjs().startOf('month');
    const endOfMonth = dayjs().endOf('month');
    const allDatesInMonth = [];

    for (let date = startOfMonth; date.isBefore(endOfMonth); date = date.add(1, 'day')) {
      allDatesInMonth.push(date.format('YYYY-MM-DD'));
    }

    const filteredDisabledDates = allDatesInMonth.filter(date => !formattedAvailableDays.includes(date));

    setDisabledDates(filteredDisabledDates);
  }, [availableDays]);

  const today = dayjs();

  const onChangeHandler = (value) => {
    setSelectedDate(value);
    onDateSelect(value); // Llama a la función onDateSelect para pasar la fecha seleccionada
  };

  const shouldDisableDateHandler = (value) => {
    const dateStr = dayjs(value).format('YYYY-MM-DD');
    return disabledDates.includes(dateStr);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        value={selectedDate}
        minDate={today}
        onChange={onChangeHandler}
        shouldDisableDate={shouldDisableDateHandler}
      />
    </LocalizationProvider>
  );
};


