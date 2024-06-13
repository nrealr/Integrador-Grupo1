import React, { useState, useEffect } from "react";
import "./Detail.styles.css";
import { getDoctorById, getSpecialtyById } from "../../Services";
import { Link, useLocation, useParams } from "react-router-dom";
import { FeaturesCard } from "./FeaturesCard";
import { BookingCalendar } from "../../Components/BookingCalendar/BookingCalendar";
import { IcnReturnHome } from "../../Utils";
import { BtnAppointment } from "./BtnAppointment";
import { getLocationById } from "../../Services/Locations/getLocationById";
import { TimeSlotMenu } from "../../Components/TimeSlotMenu";
import { getAvailableDays } from "../../Services/availableDays";

export const Detail = ({ id: propId }) => {
  const location = useLocation();
  const [doctorSelected, setDoctorSelected] = useState({});
  const [specialty, setSpecialty] = useState("");
  const [doctorLocation, setDoctorLocation] = useState("");
  const params = useParams();
  const [takenTimeSlots, setTakenTimeSlots] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Use el operador ternario para determinar el id a utilizar
  const id = propId !== undefined && propId !== null ? propId : params.id;
  //const id = propId || params.id;

  useEffect(() => {

    // Here we can block slots from backend

    fetch('/api/taken-time-slots')

      .then(response => response.json())

      .then(data => setTakenTimeSlots(data));

  }, []);

  const getData = async () => {

    let doctorsData = await getDoctorById(id);

    if (doctorsData.img) {
      doctorsData.urlImg = 'data:image/jpg;base64,' + doctorsData.img;
    }

    if (doctorsData.specialtyId) {
      const specialtyData = await getSpecialtyById(doctorsData.specialtyId);
      setSpecialty(specialtyData.name);
    }

    if (doctorsData.locationId) {
      const locationData = await getLocationById(doctorsData.locationId);
      setDoctorLocation(locationData.name);
    }

    setDoctorSelected(doctorsData);
  };

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    getAvailableDays().then((days) => {
      setAvailableDays(days);
      setIsError(false);
    }).catch((err) => {
      console.error(err);
      setIsError(true);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  // Verifica si hay algún parámetro de consulta presente en la URL
  const queryParamsPresent = location.search && location.search.length > 0;

  console.log("URL actual:", location.pathname + location.search);
  console.log("queryParamsPresent:", queryParamsPresent);

  const displayErrorMessage = !isLoading && isError;
  const displayCalendar = !isError && !isLoading;

  return (
    <section className="doctor-detail">
      <div className="detailHeader">
        {!queryParamsPresent && <IcnReturnHome />}
        <h1>Dr. {doctorSelected.name} {doctorSelected.lastname}</h1>
      </div>

      <div className="detailBody">
        <div>
          <img
            className="doctorImage"
            src={doctorSelected.urlImg}
            alt="Dr. Photography"
          />
        </div>

        <div className="doctor-data">
          <div>
            <h3>Hello! I'm a specialist in {specialty}</h3>
            <h3>I'm located in the {doctorLocation}</h3>
            <p>{doctorSelected.description}</p>
            <BtnAppointment />
          </div>
        </div>

        <div className="appointment-area">
          <TimeSlotMenu markTakenTimeSlots={setTakenTimeSlots} />
          {displayErrorMessage && <span className="msge-error">An error occurred while retrieving available days. Our team is working to resolve the issue as soon as possible. Please try again later</span>}
          {displayCalendar &&
            <BookingCalendar
              className="calendarDate"
              availableDays={availableDays}
            />
          }
        </div>

      </div>


      {!queryParamsPresent && (
        <div className="detailFeatures">
          <FeaturesCard doctorId={doctorSelected.id} />
        </div>
      )}
    </section>
  );
};



