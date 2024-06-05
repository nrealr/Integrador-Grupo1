import React, { useState, useEffect, useMemo } from "react";
import { getDoctors } from "../../../../Services";
import './Recommendations.styles.css'
import { Container, Grid, Typography, Box, CircularProgress } from "@mui/material";
import { RecommendCard } from "../RecommendCard";
import { RecommendationsPagination } from "../RecommendationsPagination";



const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDoctors = async () => {
      setLoading(true);
      const doctorData = await getDoctors();
      setDoctors(getRandomDoctors(doctorData));
      setLoading(false);
    };
    loadDoctors();
  }, []);

  return { doctors, loading };
};

/**
 * 
 * @param {*} doctors 
 * @returns ten random doctors
 */
const getRandomDoctors = (doctors) => {
  const shuffledDoctors = doctors.sort(() => 0.5 - Math.random());
  return shuffledDoctors.slice(0, 10);
};


/**
 * 
 * @param {*} doctors 
 * @param {*} doctorsPerPage 
 * @returns pagination function
 */

const usePagination = (doctors, doctorsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  return { currentDoctors, paginate, currentPage };
};


/**
 * 
 * @returns {React.Component} Show preview of ten random doctors
 */

// export const Recommendations = () => {
//   const { doctors, loading } = useDoctors();
//   const doctorsPerPage = 10;
//   const { currentDoctors, paginate, currentPage } = usePagination(doctors, doctorsPerPage);

//   if (loading) {
//     return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//             <CircularProgress />
//           </Box>;
//   }

//   return (
//     <Container className="recommendations-container" 
//       maxWidth="lg"
//       sx={{ 
//         padding: { xs: '0 1rem', sm: '0 2rem', md: '0' }, 
//         maxWidth: { xs: '100%', md: 'lg' } 
//     }} >
//       {/*... */}
//       <Grid container spacing={4}>
//         {currentDoctors.map((doctor) => (
//           <Grid item xs={12} sm={6} md={6} key={doctor.id}>
//             <RecommendCard doctor={doctor} />
//           </Grid>
//         ))}
//       </Grid>

//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
//         <RecommendationsPagination
//           doctorsPerPage={doctorsPerPage}
//           totalDoctors={doctors.length}
//           paginate={paginate}
//           currentPage={currentPage}
//         />
//       </Box>

//     </Container>
//   );
// };




export const Recommendations = () => {
  const { doctors, loading } = useDoctors();
  const doctorsPerPage = 10;
  const { currentDoctors, paginate, currentPage } = usePagination(doctors, doctorsPerPage);

  if (loading) {
    return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>;
  }

  return (

    <Container className="recommendations-container"
      maxWidth="lg"
      sx={{
        padding: { xs: '0 1rem', sm: '0 2rem', md: '0' },
        maxWidth: { xs: '100%', md: 'lg' }
      }} >


      <Box className="flex-container" sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '2rem' }}>
        {currentDoctors.map((doctor) => (
          <Box className="flex-item" key={doctor.id} sx={{ 
            flexBasis: '40%', 
            margin: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center' }}>
            <RecommendCard doctor={doctor} />
          </Box>
        ))}
      </Box>


      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '2rem' }}>
        <RecommendationsPagination
          doctorsPerPage={doctorsPerPage}
          totalDoctors={doctors.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Box>


    </Container>
  );
};

