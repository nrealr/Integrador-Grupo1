import React, { useEffect, useState } from "react";
import { getDoctors } from "../../../Services";
import { DoctorCard } from "../../Common/DoctorCard";
import './Recommendations.styles.css'


export const Recommendations = () => {
  const [randomDoctors, setRandomDoctors] = useState([]);

  const loadDoctors = async () => {
    const doctorData = await getDoctors ();
    setRandomDoctors(tenRandomDoctors(doctorData));
  };

  const tenRandomDoctors = (doctors) => {
    const shuffledDoctors = doctors.sort(() => 0.5 - Math.random());
    return shuffledDoctors.slice(0, 10);
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  if (randomDoctors.length === 0) {
    return <div>Loading...</div>;
  }

  return (

<div className="recommended">
  {randomDoctors.map((doctor) => {
    return <DoctorCard doctor={doctor} key={doctor.id} />;
  })}
</div>

  );
};

