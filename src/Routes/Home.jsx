import React, { useEffect, useState } from 'react'
import { getDoctor } from '../Components/utils/global.context';
import DoctorCard from '../Components/Common/DoctorCard'

const Home = () => {

  const [doctors, setDoctors] = useState([])


  useEffect(() => {

    const getData = async ()=>{
      let doctorData =  await getDoctor()
      setDoctors(doctorData)
    }
    getData()
  

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