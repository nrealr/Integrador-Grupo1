import React, { useEffect, useState } from 'react';
import { getDoctors } from '../../Services';
import DoctorCard from '../../Components/Common/DoctorCard';

/**
 * 
 * @returns {React.Component} Home component, show all doctors
 */
export const Home = () => {

  const [doctors, setDoctors] = useState([]);

  const loadDoctors = async ()=>{
    let doctorData = await getDoctors();
    setDoctors(doctorData)
  }


  useEffect(() => {
    loadDoctors();
  }, []);

  if(doctors==null){
    return;
  }

  return (
    <div className='container-cards'>
      {doctors.map((doctor) => {
        return <DoctorCard doctor={doctor} key={doctor.id} />;
      })}
    </div>
  )
};