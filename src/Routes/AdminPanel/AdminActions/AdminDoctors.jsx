
/**
 * Doctor Administration Component
 *
 * This component displays a table with the list of registered doctors,
 * along with buttons to add and delete doctors.
 */

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
import DeleteIcon from '@mui/icons-material/Delete';




export const AdminDoctors = () => {
  /**
   * State to store the list of doctors
   */
  const [doctors, setDoctors] = useState([]);

  /**
   * State to store the current date and time
   */
  const [currentDate, setCurrentDate] = useState(new Date());

  /**
   * Function to load the list of doctors from the service
   */
  const loadDoctors = async () => {
    let doctorData = await getDoctors();
    setDoctors(doctorData);
  };

  /**
   * Function to delete a doctor by ID
   *
   * @param {number} doctorId ID of the doctor to delete
   */
  const handleDeleteDoctor = async (doctorId) => {
    await deleteDoctor(doctorId);
    loadDoctors();
  };

  /**
   * Effect to load the list of doctors when the component mounts
   */
  useEffect(() => {
    loadDoctors();
  }, []);

  /**
   * Definition of the table columns
   */
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 130,
      flex: 2,
    },
    {
      field: 'lastname',
      headerName: 'Lastname',
      width: 130,
      flex: 2,
    },
    {
      field: 'rut',
      headerName: 'RUT',
      width: 90,
      flex: 1,
    },
    {
      field: 'specialization',
      headerName: 'Specialization',
      width: 160,
      flex: 2,
    },
    {
      field: 'update',
      headerName: 'Update',
      width: 80,
      flex: 1,
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
      flex: 1,
      renderCell: (params) => (
        <StyledAdminDeleteButton onClick={() => handleDeleteDoctor(params.row.id)}>
          <p><DeleteIcon/></p>
        </StyledAdminDeleteButton>
      ),
    },
  ];

  /**
   * Format for the current date and time
   */
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