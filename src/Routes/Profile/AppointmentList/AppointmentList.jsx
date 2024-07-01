import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAppointmentsByUser, cancelAppointment } from "../../../Services/Appointments";
import { getDoctorById } from "../../../Services/Doctors";
import { getLocationById } from "../../../Services/Locations";
import { useDoctorStates } from "../../../Context";
import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import {
  StyledAppointmentListTable,
  AppointmentListHeader,
  StyledAppointmentListTitle,
  StyledAppointmentListSection,
  StyledAppointmentListAction,
  CancelButton,
} from "./AppointmentList.styles";


import { ConfirmationModal } from "../../../Components/ModalComponent";


export const AppointmentList = () => {
  const { state } = useDoctorStates();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsData = await getAppointmentsByUser(state.currentUser.id);
        const appointmentsWithDetails = await Promise.all(
          appointmentsData.map(async (appointment) => {
            const doctor = await getDoctorById(appointment.doctorId);
            const location = await getLocationById(doctor.locationId);
            return {
              ...appointment,
              doctorName: `${doctor.name} ${doctor.lastname}`,
              date: format(new Date(appointment.startTime), "dd-MM-yyyy"),
              startTime: format(new Date(appointment.startTime), "HH:mm"),
              endTime: format(new Date(appointment.endTime), "HH:mm"),
              locationName: location.name,
            };
          })
        );
        setAppointments(appointmentsWithDetails);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    if (state.currentUser.id) {
      fetchAppointments();
    }
  }, [state.currentUser.id]);

  const handleCancelAppointment = async (id) => {
    setSelectedAppointmentId(id);
    setIsModalOpen(true);
  };

  const handleConfirmCancel = async () => {
    try {
      await cancelAppointment(selectedAppointmentId);
      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === selectedAppointmentId ? { ...appointment, status: "Cancelled" } : appointment
      );
      setAppointments(updatedAppointments);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      alert("Failed to cancel appointment. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAppointmentId(null);
  };

  const columns = [
    { field: "doctorName", headerName: "Doctor", width: 150, flex: 1 },
    { field: "date", headerName: "Date", width: 130, flex: 2 },
    { field: "startTime", headerName: "Start Time", width: 130, flex: 2 },
    { field: "endTime", headerName: "End Time", width: 130, flex: 2 },
    { field: "locationName", headerName: "Location", width: 130, flex: 2 },
    { field: "status", headerName: "Status", width: 130, flex: 2 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) =>
        params.row.status !== "Cancelled" ? (
          <StyledAppointmentListAction>
            <CancelButton onClick={() => handleCancelAppointment(params.row.id)}>
              Cancel Appointment
            </CancelButton>
          </StyledAppointmentListAction>
        ) : null,
    },
  ];

  if (loading) {
    return (
      <StyledAppointmentListSection>
        <Typography variant="h6" color="textSecondary">
          Loading...
        </Typography>
      </StyledAppointmentListSection>
    );
  }

  if (appointments.length === 0) {
    return (
      <StyledAppointmentListSection>
        <Typography variant="h6" color="textSecondary">
          No appointments found.
        </Typography>
      </StyledAppointmentListSection>
    );
  }

  return (
    <>
      <div className="favorites-display" style={{ height: "100vh", width: "100%" }}>
        <AppointmentListHeader>
          <StyledAppointmentListSection>
            <StyledAppointmentListTitle>Your Appointments</StyledAppointmentListTitle>
          </StyledAppointmentListSection>
        </AppointmentListHeader>
        <StyledAppointmentListTable
          rows={appointments}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          autoHeight
          disableSelectionOnClick
          onRowClick={(params) => console.log("Navigating to detail:", params.row.id)}
        />
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmCancel}
        message="Are you sure you want to cancel your appointment?"
        error={false}
        redirectUrl="/profile/appointments"
      />
    </>
  );
};


