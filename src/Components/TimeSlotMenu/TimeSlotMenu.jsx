

import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px; /* Establece el ancho del contenedor */
  margin: 0 auto; /* Centra el contenedor */
`;

const TimeSlotList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center; /* Centrar las ranuras de tiempo */
`;

const TimeSlot = styled.li`
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 0;
  cursor: pointer;
  width: 100%; /* Establece el ancho del elemento TimeSlot */
  text-align: center; /* Centra el texto de la hora */
  &.selected {
    background-color: #df7475; /* Fondo rojo cuando se selecciona */
    color: white; /* Texto blanco para que se vea bien sobre el fondo rojo */

}
  &:hover {
    background-color: #8ecae6; /* Agregar hover */
  }
`;

const SelectedTimeSlot = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  min-height: 60px;
  ${props => props.isSelected && `color: red;`} /* Agrega el color rojo al texto seleccionado */
`;

export const TimeSlotMenu = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isTimeSelected, setIsTimeSelected] = useState(false);

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setIsTimeSelected(true);
  };

  const slotList = Array.from({ length: 11 });

  return (
    <Container>
      <TimeSlotList>
        {slotList.map((_, i) => {
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
        })}
      </TimeSlotList>
      <SelectedTimeSlot isSelected={isTimeSelected}>
        Time selected: {isTimeSelected ? selectedTimeSlot : ''}
      </SelectedTimeSlot>
    </Container>
  );
};