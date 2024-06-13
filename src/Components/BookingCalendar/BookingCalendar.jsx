import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { StaticDatePicker } from './BookingCalendar.styled';


export const BookingCalendar = ({
  availableDays
}) => {

    /* propiedades del objeto dayjs
    {
      "$L": "en",
      "$d": "2024-06-13T04:00:00.000Z",
      "$y": 2024,
      "$M": 5,
      "$D": 13,
      "$W": 4,
      "$H": 0,
      "$m": 0,
      "$s": 0,
      "$ms": 0,
      "$x": {},
      "$isDayjsObject": true
    }
     */

    const date = new Date().toISOString()
    const today = dayjs(date);

    const onChangeHandler = (value, context) => {
      //console.log(value)
    };

    const shouldDisableDateHandler = (value) => {
      //const isDisabled = value.$D == 27; 
      /* const availableDaysMap = availableDays.map((item) => {
        return dayjs(item);
      }); */

      const year = value.$y;
      const month = String(value.$M).padStart(2, 0);
      const day = String(value.$D).padStart(2, 0);

      const date = `${year}-${month}-${day}`;

      const availableDaysMap = availableDays.map((dateStr) => {
        return dateStr.split('T').shift();
      });

      const isDisabled = !availableDaysMap.includes(date);
      return isDisabled;
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            minDate={today}
            onChange={onChangeHandler}
            shouldDisableDate={shouldDisableDateHandler}
          />
        </LocalizationProvider>
    )
};