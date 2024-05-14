import React, { useState, useEffect } from "react";
import "./Detail.style.css";
import { getDoctorById } from "../../Services";
import { useParams } from "react-router-dom";

export const Detail = () => {


   const { id } = useParams();
   const [doctorSelected, setDoctorSelected] = useState({});

   useEffect(() => {

    const getData = async ()=>{
      let doctorsData =  await getDoctorById(id)
      console.log(doctorsData)
      setDoctorSelected(doctorsData)
    }
    getData()
  
  }, [id]);

  //rushed solution for not found case
    if (!doctorSelected.rut) {
    return <h1>Doctor Not found</h1>;
  }

    return (
    <section className="doctor-info">
      <img src={doctorSelected.img} alt="Foto del doctor" />
      <h2>{doctorSelected.name} {doctorSelected.lastname}</h2>
      <h3>{doctorSelected.rut}</h3>
      <p>{doctorSelected.description}</p>
    </section>
  );


};
