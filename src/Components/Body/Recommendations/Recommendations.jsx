import React, { useEffect, useState } from "react";
import { getDoctors } from "../../../Services";
import { DoctorCard } from "../../Common/DoctorCard";
import './Recommendations.styles.css'
import { RecommendationsPagination } from "./RecommendationsPagination";
import { Container, Grid, Typography, Box, CircularProgress } from "@mui/material";


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
    return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
          </Box>;
  }

  return (
    <Container>
      <Box sx={{ textAlign: 'center', padding: '2rem 0' }}>
        <Typography 
          variant="h3" 
          component="div"
          sx={{
            fontSize: { xs: '1rem', md: '2rem' },
            marginBottom: '1rem',
            color: 'secondary.main'
          }}>
          Meet Our Top-Rated Doctors
        </Typography>
        <Typography 
          variant="h1" 
          component="div" 
          sx={{ 
            fontSize: { xs: '1.3rem', sm: '1.8rem', md: '3rem' },
            marginTop: '1rem',
            lineHeight: 1.2,
            color: 'primary.main'
          }}>
          Discover Why Our Patients <br />
          Love Them! <br />
          Read Reviews and Ratings from Happy Clients <br />
          Who've Booked Appointments.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {currentDoctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={6} key={doctor.id}>
            <DoctorCard doctor={doctor} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <RecommendationsPagination
          doctorsPerPage={doctorsPerPage}
          totalDoctors={randomDoctors.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Box>
      {/*<div className="recommended">
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
        </div>*/}
    </Container>
  );
};

