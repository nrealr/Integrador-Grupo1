import { getDoctors } from "../../../Services";
import {DoctorCard} from "../../Common";
import "./Recommendations.styles.css";
import React, { useEffect, useState } from 'react';

export const Recommendations = () => {

  //const [doctors, setDoctors] = useState([]);
  const [randomDoctors, setRandomDoctors] = useState([]);


  const loadDoctors = async ()=>{
    const doctorData = await getDoctors();
    //const randomDoctors = tenRandomDoctors(doctorData);
    const random = tenRandomDoctors(doctorData)
    setRandomDoctors(random);
  }

  function getRandomElements(arr, numElements) {
    // Copy the original array to avoid mutating it
    const arrayCopy = [...arr];
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
  
    // Return the first numElements elements from the shuffled array
    console.log(arrayCopy.slice(0, numElements));
    return (arrayCopy.slice(0, numElements));
  }

  const tenRandomDoctors = doctors =>{
    let randomDoctors = []

    if(doctors.length < 10){
      randomDoctors = getRandomElements(doctors, doctors.length)
      return randomDoctors;
      
    }else{
     randomDoctors = getRandomElements(doctors, 10)
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
