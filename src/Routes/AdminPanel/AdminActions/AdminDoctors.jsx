
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import { getDoctors, deleteDoctor } from '../../../Services';
import { 
  StyledAdminAddButton, 
  StyledAdminTable, 
  StyledAdminDeleteButton, 
  StyledAdminActivitySection, 
  StyledAdminActivitySubtitle, 
  StyledAdminActivityTitle, 
  AdminHeader, 
  StyledAdminAction} from './AdminDoctors.styled';

export const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

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
    { field: 'id', headerName: 'ID', width: 70, flex: 1 },
    { field: 'name', headerName: 'Name', width: 130, flex: 2 },
    { field: 'lastname', headerName: 'Lastname', width: 130, flex: 2 },
    { field: 'rut', headerName: 'RUT', width: 90, flex: 1 },
    { field: 'specialization', headerName: 'Specialization', width: 160, flex: 2 },
    {
      field: 'update',
      headerName: 'Update',
      width: 80, flex: 1,
      renderCell: (params) => (
        <Link to={`/admin/doctors/update/${params.row.id}`}>
          <p className="admin-edit-button">🖊</p>
        </Link>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 80, flex: 1,
      renderCell: (params) => (
        <StyledAdminDeleteButton onClick={() => handleDeleteDoctor(params.row.id)}>
          <p>🚮</p>
        </StyledAdminDeleteButton>
      ),
    },
  ];

  const formattedDate = `${currentDate.toLocaleDateString()} at ${currentDate.toLocaleTimeString()}`;

  return (
    <div className="admin-display">
      <AdminHeader>
        <StyledAdminActivitySection>
          <StyledAdminActivityTitle>Registered Doctors</StyledAdminActivityTitle>
          <StyledAdminActivitySubtitle>Last update {formattedDate}</StyledAdminActivitySubtitle>
        </StyledAdminActivitySection>

        <section className="admin-user">
          <p>👤 Admin</p>
        </section>
      </AdminHeader>

      <StyledAdminAction>

        <Link to={ROUTES.DOCTORSADD}>
          {" "}
          <StyledAdminAddButton>Add Doctor</StyledAdminAddButton>{" "}
        </Link>
      </StyledAdminAction>

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
        columnWidth={150} // set fixed column width
        sx={{
          '.MuiDataGrid-columnHeaders': {
            flex: 1, // make column headers adapt to available width
          },
          '.MuiDataGrid-cell': {
            flex: 1, // make cells adapt to available width
          },
        }}
      />
    </div>
  );
};