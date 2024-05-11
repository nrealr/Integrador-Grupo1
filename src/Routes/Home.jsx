import React, { useEffect, useState } from 'react'
import { getDoctors } from '../Services';
import DoctorCard from '../Components/Common/DoctorCard'

const Home = () => {

  const [doctors, setDoctors] = useState([]);

  const loadDoctors = async ()=>{
    let doctorData = await getDoctors();
    setDoctors(doctorData)
  }


  useEffect(() => {
    loadDoctors();
  }, []);


  return (
    <div>
      {doctors.map((doctor) => {
        return <DoctorCard doctor={doctor} key={doctor.id} />;
      })}
    </div>
  )
}

export default Home