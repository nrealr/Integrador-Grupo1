import React, { useState, useEffect } from "react";
import "./Detail.style.css";
import { getDoctorById } from "../../Services";
import { Link, useParams } from "react-router-dom";
import { CategoriesCard } from "./CategoriesCard";

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
  //   if (!doctorSelected.rut) {
  //   return <h1>Doctor Not found</h1>;

  // }

    return (
    <section className="doctor-info">
      <div className="detailHeader">
          <Link to={`/`}><button>←</button></Link>
      <h2>Dr. {doctorSelected.name} {doctorSelected.lastname}</h2>
      </div>
      <div className="detailBody">
        <div>
        <img src={doctorSelected.img} alt="Foto del doctor" />
        </div>
        <div className="detailBodyRight">
        <div>
        <h2>Specialization</h2>
        <p>{doctorSelected.description}</p>
        </div>
        <Link className='cardButton'  to={`#`}><button>Book Appointment →</button></Link>
        </div>
      </div>

<CategoriesCard/>

    </section>
  );


};
