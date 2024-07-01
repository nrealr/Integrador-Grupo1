import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  margin: 0 auto;
`;

export const TimeSlotList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px;
  flex: 1;
`;

export const TimeSlot = styled.li`
  background-color: ${({ status }) => (status === 'Available'? '#aed8d7' : '#ccc')};
  padding: 10px;
  border-radius: 15px;
  margin: 5px;
  cursor: ${({ status }) => (status === 'Available'? 'pointer' : 'not-allowed')};
  width: 100%;
  text-align: center;
  &:hover {
    background-color: ${({ status }) => (status === 'Available'? '#87c7c3' : '#a3a3a3')};
  }
  &.selected {
    background-color: #8ecae6;
  }
`;

export const SelectedTimeSlot = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  min-height: 60px;
  ${({ isSelected }) => isSelected && 'color: red;'}
`;