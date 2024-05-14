import React, { useEffect, useState } from 'react';
import { getDoctors } from '../../Services';
import DoctorCard from '../../Components/Common/DoctorCard';

/**
 * 
 * @returns {React.Component} Home component, show all doctors
 */
export const Home = () => {

  const [doctors, setDoctors] = useState([]);
  const [randomDoctors, setRandomDoctors] = useState([]);


  const loadDoctors = async ()=>{
    let doctorData = await getDoctors();
    setDoctors(doctorData)
  }

  const tenRandomDoctors = async () =>{
    let doctors = await getDoctors();
    const randomDoctors = []
      
      while (randomDoctors.length < 10) {
          const randomIndex = Math.floor(Math.random() * doctors.length);
          randomDoctors.push(doctors.splice(randomIndex, 1)[0]);
      }

      setRandomDoctors(randomDoctors);
    }


  useEffect(() => {
    tenRandomDoctors();
  }, []);

  if(doctors==null){
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