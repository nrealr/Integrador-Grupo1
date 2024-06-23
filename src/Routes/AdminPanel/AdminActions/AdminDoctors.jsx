import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import { getDoctors, deleteDoctor } from '../../../Services';
import {DeleteProductFunction} from "../../../Components"


export const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  const loadDoctors = async () => {
    let doctorData = await getDoctors();
    setDoctors(doctorData)
  }

  const handleDeleteDoctor = async (doctorId) =>{
    await deleteDoctor(doctorId);
    loadDoctors();
  }


  useEffect(() => {
    loadDoctors();
  }, []);

  return (

    

    <div className="admin-display">
    <div className="admin-header">
      <section className="admin-activity">
        <h2>Doctor list</h2>
        <h4>Last update May 13, 2024 at 2.39 PM</h4>
      </section>

      <section className="admin-user">
        <p>Admin</p>
        <p>👤</p>
      </section>
    </div>

    <div className="admin-action">
      <section className="admin-search-bar">
        <p>🔍</p>
        <p>search placement</p>
      </section>

      <Link to={ROUTES.DOCTORSADD}>
        {" "}
        <button className="admin-add-button">Add Doctor</button>{" "}
      </Link>
    </div>

     <section className="admin-display-table">

    <div className="admin-display-title">
      <p>ID</p>
      <p>NAME</p>
      <p>LASTNAME</p>
      <p>RUT</p>
      <p>SPECIALIZATION</p>
      <p>ACTIONS</p>
    </div>


<div className="admin-display-data">
  {doctors.map((doctor) => (
    <div key={doctor.id} className="doctor-api-item">
      <p>{doctor.id}</p>
      <p>{doctor.name}</p>
      <p>{doctor.lastname}</p>
      <p>{doctor.rut}</p>
      <p>Doctor</p>
      <Link id={doctor.id} to={`/admin/doctors/update/${doctor.id}`}>
        <p className="admin-edit-button">🖊</p>
      </Link>
      <DeleteProductFunction doctor={doctor} onDelete={() => handleDeleteDoctor(doctor.id)} />
    </div>
  ))}
</div>

    </section>
  </div>

  )

}

/* import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import { getDoctors, deleteDoctor } from '../../../Services';
import { StyledAdminAddButton, StyledAdminTable, StyledAdminDeleteButton } from './AdminDoctors.styled';


export const AdminDoctors = () => {

  const [doctors, setDoctors] = useState([]);


  const loadDoctors = async () => {
    let doctorData = await getDoctors();
    setDoctors(doctorData);
  };


  const handleDeleteDoctor = async (doctorId) => {
    await deleteDoctor(doctorId);
    loadDoctors();
  };


  useEffect(() => {
    loadDoctors();
  }, []);


  const columns = [

    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'lastname', headerName: 'Lastname', width: 130 },
    { field: 'rut', headerName: 'RUT', width: 90 },
    { field: 'specialization', headerName: 'Specialization', width: 160 },
    {
      field: 'update',
      headerName: 'Update',
      width: 80,
      renderCell: (params) => (
        <Link to={`/admin/doctors/update/${params.row.id}`}>
          <p className="admin-edit-button">🖊</p>
        </Link>
      ),
    },
  
    {
      field: 'delete',
      headerName: 'Delete',
      width: 80,
      renderCell: (params) => (
        <StyledAdminDeleteButton onClick={() => handleDeleteDoctor(params.row.id)}>
          <p>🚮</p>
        </StyledAdminDeleteButton>
      ),
    },
  ];

  return (
    <div className="admin-display">
      <div className="admin-header">
        <section className="admin-activity">
          <h2>Doctor list</h2>
          <h4>Last update May 13, 2024 at 2.39 PM</h4>
        </section>
        <section className="admin-user">
          <p>Admin</p>
          <p>👤</p>
        </section>
      </div>

      <div className="admin-action">
        <section className="admin-search-bar">
          <p>🔍</p>
          <p>search placement</p>
        </section>

        <Link to={ROUTES.DOCTORSADD}>
          {" "}
          <StyledAdminAddButton>Add Doctor</StyledAdminAddButton>{" "}
        </Link>
      </div>

      <StyledAdminTable
        rows={doctors}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );

}; */