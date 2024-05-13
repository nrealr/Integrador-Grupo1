import React, { useEffect, useState } from 'react';
import { getDoctors } from '../../Services';
import DoctorCard from '../../Components/Common/DoctorCard';

/**
 * 
 * @returns {React.Component} Home component, show all doctors
 */
export const Home = () => {

  //const [doctors, setDoctors] = useState([]);
  const [randomDoctors, setRandomDoctors] = useState([]);


  const loadDoctors = async ()=>{
    const doctorData = await getDoctors();
    //const randomDoctors = tenRandomDoctors(doctorData);

    setRandomDoctors(doctorData);
  }

  const tenRandomDoctors = async (doctors) =>{
    const randomDoctors = []
      
    while (randomDoctors.length < 10) {
        const randomIndex = Math.floor(Math.random() * doctors.length);
        randomDoctors.push(doctors.splice(randomIndex, 1)[0]);
    }
    
    return randomDoctors;
  }

  useEffect(() => {
    loadDoctors();
  }, []);

  if(randomDoctors==null){
    return;
  }

  return (
    <div>

    <div className="recommended">
      {randomDoctors.map((doctor) => {
        return <DoctorCard doctor={doctor} key={doctor.id} />;
      })}
    </div>

    </div>

  )
};