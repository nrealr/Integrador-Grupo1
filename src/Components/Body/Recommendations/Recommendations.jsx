import React, { useEffect, useState } from "react";
import { getDoctors } from "../../../Services";
import { DoctorCard } from "../../Common/DoctorCard";
import './Recommendations.styles.css'
import { RecommendationsPagination } from "./RecommendationsPagination";


export const Recommendations = () => {
  const [randomDoctors, setRandomDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 10;

  const loadDoctors = async () => {
    const doctorData = await getDoctors ();
    setRandomDoctors(tenRandomDoctors(doctorData));
  };

  const tenRandomDoctors = (doctors) => {
    const shuffledDoctors = doctors.sort(() => 0.5 - Math.random());
    return shuffledDoctors;
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = randomDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (randomDoctors.length === 0) {
    return <div>Loading...</div>;
  }

  return (

  <div className="recommended">

    <div className="titles">
      <h3>Meet Our Top-Rated Doctors</h3>
      <h1>Discover Why Our Patients 
        <br /> Love Them! <br /> 
        Read Reviews and Ratings from Happy Clients <br /> Who've Booked Appointments.</h1>
    </div>

    <div className="recommendation-cards">
      {currentDoctors.map((doctor) => 
        {return <DoctorCard doctor={doctor} key={doctor.id}/>;
        }
      )
      }
    </div>
    <RecommendationsPagination 
        doctorsPerPage={doctorsPerPage} 
        totalDoctors={randomDoctors.length} 
        paginate={paginate} 
        currentPage={currentPage} 
      />
  </div>
  );
};

