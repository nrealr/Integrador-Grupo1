import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { CalendarBox, StaticDatePicker } from './BookingCalendar.styled';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export const BookingCalendar = ({ availableDays, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    const formattedAvailableDays = availableDays.map(dateStr => dayjs(dateStr).format('YYYY-MM-DD'));

    const startOfYear = dayjs().startOf('year');
    const endOfYear = dayjs().endOf('year');
    const allDatesInYear = [];

    for (let date = startOfYear; date.isBefore(endOfYear) || date.isSame(endOfYear, 'day'); date = date.add(1, 'day')) {
      allDatesInYear.push(date.format('YYYY-MM-DD'));
    }

    const filteredDisabledDates = allDatesInYear.filter(date => !formattedAvailableDays.includes(date));

    setDisabledDates(filteredDisabledDates);
  }, [availableDays]);

  const today = dayjs();

  const onChangeHandler = (value) => {
    setSelectedDate(value);
    onDateSelect(value);
  };

  const shouldDisableDateHandler = (value) => {
    const dateStr = dayjs(value).format('YYYY-MM-DD');
    return disabledDates.includes(dateStr);
  };

  return (
    <CalendarBox>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        value={selectedDate}
        minDate={today}
        onChange={onChangeHandler}
        shouldDisableDate={shouldDisableDateHandler}
      />
    </LocalizationProvider>
    </CalendarBox>
  );
};
