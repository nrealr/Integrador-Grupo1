import { getDoctors } from "../../../Services";
import DoctorCard from "../../Common/DoctorCard";
import "./Recommendations.styles.css";
import React, { useEffect, useState } from 'react';

export const Recommendations = () => {

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

      <h1>Recommended</h1>

    <div className="recommended">
      {randomDoctors.map((doctor) => {
        return <DoctorCard doctor={doctor} key={doctor.id} />;
      })}
    </div>

    </div>

  )
};

export default Recommendations;