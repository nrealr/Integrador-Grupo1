import React, { useState, useEffect } from "react";
import "./Detail.styles.css";
import { getDoctorById, getSpecialtyById, getAvailableDays } from "../../Services";
import { useLocation, useParams } from "react-router-dom";
import { FeaturesCard } from "./FeaturesCard";
import { BookingCalendar } from "../../Components/BookingCalendar/BookingCalendar";
import { IcnReturnHome } from "../../Utils";
import { BtnAppointment } from "./BtnAppointment";
import { getLocationById } from "../../Services/Locations/getLocationById";
import { TimeSlotMenu } from "../../Components/TimeSlotMenu";

export const Detail = ({ id: propId }) => {
  const location = useLocation();
  const [doctorSelected, setDoctorSelected] = useState({});
  const [specialty, setSpecialty] = useState("");
  const [doctorLocation, setDoctorLocation] = useState("");
  const params = useParams();
  const [availableDays, setAvailableDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // Asegúrate de inicializar selectedTimeSlot
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const id = propId !== undefined && propId !== null ? propId : params.id;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const doctorData = await getDoctorById(id);
        setDoctorSelected(doctorData);

        if (doctorData.img) {
          doctorData.urlImg = 'data:image/jpg;base64,' + doctorData.img;
        }

        if (doctorData.specialtyId) {
          const specialtyData = await getSpecialtyById(doctorData.specialtyId);
          setSpecialty(specialtyData.name);
        }

    if (doctorsData.locationId) {
      const locationData = await getLocationById(doctorsData.locationId);
      setDoctorLocation(locationData);
            doctorsData.location = locationData.name;
            doctorsData.locationAddress = locationData.address;
    }

        // Llamar al servicio para obtener las fechas disponibles por doctor
        const days = await getAvailableDays(doctorData.id); // Asumiendo que este servicio retorna las fechas disponibles
        setAvailableDays(days);

        setIsError(false);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    console.log(selectedTimeSlot);
  };

  const queryParamsPresent = location.search && location.search.length > 0;

  return (
    <section className="doctor-detail">
      <div className="detailHeader">
        {!queryParamsPresent && <IcnReturnHome />}
        <h1>
          Dr. {doctorSelected.name} {doctorSelected.lastname}
        </h1>
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
            <h3>I'm located in the {doctorLocation.name}</h3>
            <p>{doctorSelected.description}</p>
            <BtnAppointment 
              doctorDetails={{ ...doctorSelected, specialty, location: doctorLocation.name, locationAddress: doctorLocation.address }}
              selectedDate={selectedDate}
              selectedTimeSlot={selectedTimeSlot}
            />
          </div>
        </div>

        <div className="appointment-area">
          {selectedDate && (
            <TimeSlotMenu
              doctorId={doctorSelected.id}
              selectedDate={selectedDate}
              onTimeSlotSelect={handleTimeSlotSelect}
            />
          )}
          {isError && (
            <span className="msge-error">
              An error occurred while retrieving available days. Our team is
              working to resolve the issue as soon as possible. Please try
              again later
            </span>
          )}
          {!isError && !isLoading && (
            <BookingCalendar
              className="calendarDate"
              availableDays={availableDays}
              onDateSelect={handleDateSelect}
            />
          )}
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
















