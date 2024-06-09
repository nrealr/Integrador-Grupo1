import React, { useState, useEffect } from "react";
import "./Detail.styles.css";
import { getDoctorById, getSpecialtyById } from "../../Services";
import { Link, useParams } from "react-router-dom";
import { FeaturesCard } from "./FeaturesCard";
import { BookingCalendar } from "../../Components/BookingCalendar/BookingCalendar";
import { IcnReturnHome } from "../../Utils";




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

  /**
   * @returns {React.Component} Condition: if the doctor isn´t registered with his DNI, the doctor will not be available
   */

  if (!doctorSelected.rut) {
    return <h1>Doctor Not found</h1>;
  }

  return (
    <section className="doctor-detail">

      <div className="detailHeader">
        <IcnReturnHome />
        <h2>Dr. {doctorSelected.name} {doctorSelected.lastname}</h2>
      </div>

      <div className="detailBody">

        <div>
          <img className="doctorImage" src={doctorSelected.urlImg} alt="Dr. Photografy" />
        </div>

        <div className="doctor-data">
          <div>
            <h3> Hello! I'm an specialist in {specialty}</h3>
            <p>{doctorSelected.description}</p>
          </div>

        </div>
{/* 
        <BookingCalendar className="calendarDate"/> */}
      </div>



      <div className="detailFeatures" >
        <h4>Features</h4>
        <FeaturesCard doctorId={doctorSelected.id} />
        {/* <Link to={ROUTES.APPOINTMENTS}>book</Link> */}
      </div>





    </section>

  );
};
