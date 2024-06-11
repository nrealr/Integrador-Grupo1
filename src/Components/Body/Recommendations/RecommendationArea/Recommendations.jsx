import React, { useState, useEffect } from "react";
import { getDoctors } from "../../../../Services";
import './Recommendations.styles.css'
import { Box, CircularProgress } from "@mui/material";
import { RecommendCard } from "../RecommendCard";
import { RecommendationsPagination } from "../RecommendationsPagination";

export const Recommendations = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage, setDoctorsPerPage] = useState(10);

  useEffect(() => {
    const loadDoctors = async () => {
      setLoading(true);
      const doctorData = await getDoctors();
      setDoctors(doctorData);
      setLoading(false);
    };
    loadDoctors();
  }, []);

  const getRandomDoctors = (doctors) => {
    return doctors;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  if (loading) {

    return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>;

  }

  return (
    
    <div className="recommendations-container">
      <Box className="flex-container" sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
      }}>

        {currentDoctors.map((doctor) => (
          <Box className="flex-item" key={doctor.id} sx={{
            flexBasis: '40%',
            margin: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <RecommendCard doctor={doctor} />
          </Box>
        ))}
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>

        <RecommendationsPagination
          doctorsPerPage={doctorsPerPage}
          totalDoctors={doctors.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Box>

    </div>
  );
};
