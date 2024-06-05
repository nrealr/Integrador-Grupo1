import React, { useState, useEffect } from "react";
import "./Detail.style.css";
import { getDoctorById, getSpecialtyById } from "../../Services";
import { Link, useParams } from "react-router-dom";
import { CategoriesCard } from "./CategoriesCard";

export const Detail = () => {
  const { id } = useParams();
  const [doctorSelected, setDoctorSelected] = useState({});
  const [specialty, setSpecialty] = useState("");

  useEffect(() => {
    const getData = async () => {
      let doctorsData = await getDoctorById(id);

      if (doctorsData.img) {
        doctorsData.urlImg = 'data:image/jpg;base64,' + doctorsData.img;
      }

      if (doctorsData.specialtyId) {
        const specialtyData = await getSpecialtyById(doctorsData.specialtyId);
        setSpecialty(specialtyData.name);
      }

      setDoctorSelected(doctorsData);
    };
    getData();
  }, [id]);

  if (!doctorSelected.rut) {
    return <h1>Doctor Not found</h1>;
  }

  return (
    <section className="doctor-info">
      <div className="detailHeader">
        <Link to={`/`}><button>←</button></Link>
        <h2>Dr. {doctorSelected.name} {doctorSelected.lastname}</h2>
      </div>
      <div className="detailBody">
        <div>
          <img src={doctorSelected.urlImg} alt="Foto del doctor" />
        </div>
        <div className="detailBodyRight">
          <div>
            <h2>{specialty}</h2>
            <p>{doctorSelected.description}</p>
          </div>
          <Link className='cardButton' to={`#`}><button>Book Appointment →</button></Link>
        </div>
      </div>
      <div style={{textAlign: "center"}}>
        <h1 style={{fontSize: "2rem"}}>Features</h1>
      </div>
      <CategoriesCard doctorId={doctorSelected.id}/>
    </section>
  );
};
