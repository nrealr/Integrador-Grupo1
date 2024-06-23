/**
 * BookingCalendar component
 * Renders a date picker calendar that allows the user to select a date from a list of available dates.
 * @param {array} availableDays - an array of strings representing available dates in the format YYYY-MM-DD
 */


import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { StaticDatePicker } from './BookingCalendar.styled';


export const BookingCalendar = ({
  /** Available dates in the format YYYY-MM-DD*/
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

  /**Current date and time in ISO format */
  const date = new Date().toISOString()

  /**Current date as a Day.js object*/
  const today = dayjs(date);

  /**Current date as a Day.js object*/
  const onChangeHandler = (value, context) => {
    //console.log(value)
  };

  const shouldDisableDateHandler = (value) => {
    /**Extract year, month, and day from the value object*/

    //const isDisabled = value.$D == 27; 
    /* const availableDaysMap = availableDays.map((item) => {
      return dayjs(item);
    }); */

    const year = value.$y;
    const month = String(value.$M).padStart(2, 0);
    const day = String(value.$D).padStart(2, 0);

    /**Format the date as a string in the format YYYY-MM-DD*/
    const date = `${year}-${month}-${day}`;

    /**Check if the formatted date is included in the availableDays array */
    const availableDaysMap = availableDays.map((dateStr) => {
      return dateStr.split('T').shift();
    });
    /**Return true if the date should be disabled, false otherwise*/
    const isDisabled = !availableDaysMap.includes(date);
    return isDisabled;
  };


  return (
    /**LocalizationProvider sets up the date picker's localization using the AdapterDayjs adapter
 */
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      /**StaticDatePicker component is configured with the following props:
      * - minDate: set to the current date (today) to prevent the user from selecting a date in the past
      * - onChange: set to the onChangeHandler function to handle date changes
      * - shouldDisableDate: set to the shouldDisableDateHandler function to determine which dates to disable
      */
      
      <StaticDatePicker
        minDate={today}
        onChange={onChangeHandler}
        shouldDisableDate={shouldDisableDateHandler}
      />
    </LocalizationProvider>
  )
};