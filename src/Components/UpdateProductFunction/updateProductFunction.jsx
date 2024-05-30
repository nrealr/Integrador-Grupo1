import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDoctorById } from '../../Services';

export const UpdateProductFunction = () => {

    const { id } = useParams();
    const [doctorToUpdate, setDoctorToUpdate] = useState({});
 
    useEffect(() => {
 
     const getData = async ()=>{
       let doctorsData =  await getDoctorById(id)
       console.log(doctorsData)
       setDoctorToUpdate(doctorsData)
     }

     console.log(doctorToUpdate);

 
     getData()
   
   }, [id]);
 


  return (
    <div>updateProductFunction</div>

  )
}
