import React, { useState } from 'react';
import { StatefulCalendar } from "baseui/datepicker";

const DateTimeCalendar = () => {
    return (
      <StatefulCalendar
        onChange={({ date }) => console.log(date)}
        timeSelectStart
      />
    );
  }

export default DateTimeCalendar