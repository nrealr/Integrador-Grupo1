import React, { useState, useEffect } from "react";
import "./Detail.styles.css";
import { getDoctorById, getSpecialtyById } from "../../Services";
import { Link, useLocation, useParams } from "react-router-dom";
import { FeaturesCard } from "./FeaturesCard";
import { BookingCalendar } from "../../Components/BookingCalendar/BookingCalendar";
import { IcnReturnHome } from "../../Utils";
import { BtnAppointment } from "./BtnAppointment";
import { getLocationById } from "../../Services/Locations/getLocationById";
import DateTimeCalendar from "../../Components/DateTimeCalendar/DateTimeCalendar";
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { Client as Styletron } from 'styletron-engine-monolithic';
import CalendarPicker from "../../Components/DateTimeCalendar/CalendarPicker";

export const Detail = ({ id: propId }) => {
  const location = useLocation();
  const [doctorSelected, setDoctorSelected] = useState({});
  const [specialty, setSpecialty] = useState("");
  const [doctorLocation, setDoctorLocation] = useState("");
  const params = useParams();
  const engine = new Styletron();

  const availableTimes = {
    'Wed Jun 12 2024': ['10:00', '11:00', '14:00'],
    'Thu Jun 13 2024': ['09:00', '12:00', '15:00'],
  };

  // Use el operador ternario para determinar el id a utilizar
  const id = propId !== undefined && propId !== null ? propId : params.id;

  console.log(params)

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

      if (doctorsData.locationId) {
        const locationData = await getLocationById(doctorsData.locationId);
        setDoctorLocation(locationData.name);
      }

      setDoctorSelected(doctorsData);
    };
    getData();
  }, [id]);

  if (!doctorSelected.rut) {
    return <h1>Doctor Not found</h1>;
  }

  // Verifica si hay algún parámetro de consulta presente en la URL
  const queryParamsPresent = location.search && location.search.length > 0;

  console.log("URL actual:", location.pathname + location.search);
  console.log("queryParamsPresent:", queryParamsPresent);

  return (
    <section className="doctor-detail">
      <div className="detailHeader">
        {!queryParamsPresent && <IcnReturnHome />}
        <h2>Dr. {doctorSelected.name} {doctorSelected.lastname}</h2>
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

{/*         <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <DateTimeCalendar availableTimes={availableTimes} />;
        </BaseProvider>
    </StyletronProvider> */}

<div className="App">
      <header className="App-header">
        <h1>Calendar Picker</h1>
        <CalendarPicker />
      </header>
    </div>


      </div>

      {/* Oculta el div si hay algún parámetro de consulta presente */}
      {!queryParamsPresent && (
        <div className="detailFeatures">
          <FeaturesCard doctorId={doctorSelected.id} />
        </div>
      )}
    </section>
  );
};



