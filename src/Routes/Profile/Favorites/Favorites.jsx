//
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserPreferences, getDoctorById, getSpecialtyById, getLocationById } from "../../../Services";
import {
  StyledFavoritesTable,
  StyledFavoritesSection,
  StyledFavoritesTitle,
  StyledFavoritesSubtitle,
  FavoritesHeader,
  StyledFavoritesDeleteButton
} from "../Favorites/Favorites.styles";
import { ROUTES } from "../../../Constants";
import { useDoctorStates } from "../../../Context";
import { Box, Typography } from "@mui/material";

export const Favorites = () => {
    const { state, updateFavorites } = useDoctorStates();
    const [favorites, setFavorites] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const navigate = useNavigate();
  
    const loadFavorites = async () => {
      try {
        const { favorites: favoriteIds } = await getUserPreferences();
        const favoriteDoctors = await Promise.all(
          favoriteIds.sort((a, b) => a - b).map(async (id) => {
            const doctor = await getDoctorById(id);
            const specialty = await getSpecialtyById(doctor.specialtyId);
            const location = await getLocationById(doctor.locationId);
            return { ...doctor, specialty: specialty.name, location: location.name };
          })
        );
        setFavorites(favoriteDoctors);
      } catch (error) {
        console.error("Error loading favorite doctors:", error);
      }
    };
  
    useEffect(() => {
      loadFavorites();
    }, [state.favorites]);
  
    const handleRemoveFavorite = async (event, id) => {
      event.stopPropagation(); // Evitar la redirección
      try {
        const updatedFavorites = favorites.filter(doctor => doctor.id !== id);
        setFavorites(updatedFavorites);
        const updatedFavoriteIds = updatedFavorites.map(doctor => doctor.id);
        await updateFavorites(updatedFavoriteIds);
      } catch (error) {
        console.error("Error removing favorite doctor:", error);
        alert("Failed to remove favorite doctor. Please try again.");
      }
    };
  
    const columns = [
      { field: "id", headerName: "ID", width: 70, flex: 1 },
      { field: "name", headerName: "Name", width: 130, flex: 2 },
      { field: "lastname", headerName: "Lastname", width: 130, flex: 2 },
      { field: "specialty", headerName: "Specialty", width: 200, flex: 2 },
      { field: "location", headerName: "Location", width: 130, flex: 2 },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => (
          <StyledFavoritesDeleteButton onClick={(event) => handleRemoveFavorite(event, params.row.id)}>
            Remove
          </StyledFavoritesDeleteButton>
        ),
      },
    ].filter(column => favorites.some(favorite => favorite[column.field] !== null));
  
    const formattedDate = `${currentDate.toLocaleDateString()} at ${currentDate.toLocaleTimeString()}`;
  
    return (
      <div className="favorites-display" style={{ height: '100vh', width: '100%' }}>
        <FavoritesHeader>
          <StyledFavoritesSection>
            <StyledFavoritesTitle>
              Favorite Doctors
            </StyledFavoritesTitle>
            <StyledFavoritesSubtitle>
              Last update {formattedDate}
            </StyledFavoritesSubtitle>
          </StyledFavoritesSection>
        </FavoritesHeader>
  
        {favorites.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <Typography variant="h6" color="textSecondary">
              You have no favorite doctors.
            </Typography>
          </Box>
        ) : (
          <StyledFavoritesTable
            rows={favorites}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
              sorting: {
                sortModel: [{ field: 'id', sort: 'asc' }],
              },
            }}
            pageSizeOptions={[5, 10]}
            columnWidth={150}
            disableSelectionOnClick
            onRowClick={(params) => navigate(`${ROUTES.DETAIL.replace(':id', params.row.id)}`)}
            sx={{
              ".MuiDataGrid-columnHeaders": { flex: 1 },
              ".MuiDataGrid-cell": { flex: 1 },
            }}
          />
        )}
      </div>
    );
  };