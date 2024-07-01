import React, { useState, useEffect } from "react";
import { getDoctors } from "../../../../Services";
import './Recommendations.styles.css'
import { Box, CircularProgress, Skeleton, Typography } from "@mui/material";
import { RecommendCard } from "../RecommendCard";
import { RecommendationsPagination } from "../RecommendationsPagination";
import { useDoctorStates } from "../../../../Context";

export const Recommendations = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage, setDoctorsPerPage] = useState(10);
  const { state } = useDoctorStates();

  const getRandomDoctors = (doctors) => {
    // Barajar el array de doctores
    for (let i = doctors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [doctors[i], doctors[j]] = [doctors[j], doctors[i]];
    }
    return doctors;
  };

  useEffect(() => {

    const loadDoctors = async () => {
      setLoading(true);
      const doctorData = await getDoctors();
      const randomDoctors = getRandomDoctors(doctorData);
      setDoctors(randomDoctors);
      setLoading(false);
    };
    loadDoctors();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const randomDoctors = getRandomDoctors(doctors);
    setDoctors(randomDoctors);
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
      <Box sx={{ textAlign: 'center', marginBottom: '3rem', marginTop: '7rem' }}>
        <Typography variant="h4" component="h3" sx={{ color: 'primary.main' }} >Meet Our Trusted Doctors</Typography>
        <Typography variant="h5" component="h4" sx={{ color: 'secondary.light' }} >Top-Rated by Patients for Exceptional Care</Typography>
      </Box>
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
            {/* <RecommendCard doctor={doctor} /> */}
            {doctor ? (
              <RecommendCard doctor={doctor} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={240}
                height={300}
                animation="wave" />
            )}
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
