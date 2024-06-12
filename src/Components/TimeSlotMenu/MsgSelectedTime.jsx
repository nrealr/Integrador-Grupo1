


export const MsgSelectedTime =({ selectedTimeSlot })=>{
    return (

        <p>
    
          {selectedTimeSlot && `Selected time slot: ${selectedTimeSlot}`}
    
        </p>
    
      );
}