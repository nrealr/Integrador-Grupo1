// import * as React from 'react';
// import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
// import axios from 'axios';
// import { SERVER_API } from '../../../Constants';

// // Función para obtener los features de un doctor
// const getFeaturesByDoctorId = async (doctorId) => {
//   let res = await axios.get(`${SERVER_API}/doctors/${doctorId}/features`, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return res.data;
// };

// export const DoctorFeaturesCard = ({ doctorId }) => {
//   const [features, setFeatures] = React.useState([]);

//   React.useEffect(() => {
//     const fetchDoctorFeatures = async () => {
//       try {
//         const featuresData = await getFeaturesByDoctorId(doctorId);
//         console.log("Features data received:", featuresData);
//         setFeatures(featuresData);
//       } catch (error) {
//         console.error("Error fetching doctor features:", error);
//       }
//     };

//     if (doctorId) {
//       fetchDoctorFeatures();
//     }
//   }, [doctorId]);

//   console.log("Features to render:", features);

//   return (
//     <Grid container spacing={2}>
//       {features.map(feature => (
//         <Grid item key={feature.id} xs={12} sm={6} md={4} lg={3}>
//           <Card sx={{ minHeight: '100%' }}>
//             <CardMedia
//               component="div"
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 height: '100%',
//                 width: '100%',
//                 backgroundColor: 'primary.main',
//                 color: 'white',
//               }}
//             >
//               <img src={`data:image/jpg;base64,${feature.icon}`} alt={feature.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
//             </CardMedia>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 {feature.name}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };