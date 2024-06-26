import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../Constants';
import { getSpecialties, deleteSpecialty } from '../../../../Services';
import { 
  StyledAdminAddButton, 
  StyledAdminTable, 
  StyledAdminDeleteButton, 
  StyledAdminActivitySection, 
  StyledAdminActivitySubtitle, 
  StyledAdminActivityTitle, 
  AdminHeader, 
  StyledAdminAction} from './AdminSpecialties.styled';
import DeleteIcon from '@mui/icons-material/Delete';

export const AdminSpecialties = () => {
  const [specialties, setSpecialties] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const loadSpecialties = async () => {
    let specialtyData = await getSpecialties();
    setSpecialties(specialtyData);
  };

  const handleDeleteSpecialty = async (specialtyId) => {
    await deleteSpecialty(specialtyId);
    loadSpecialties();
  };

  useEffect(() => {
    loadSpecialties();
  }, []);

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
      field: 'description',
      headerName: 'Description',
      width: 160,
      flex: 2,
    },
    {
      field: 'update',
      headerName: 'Update',
      width: 80,
      flex: 1,
      renderCell: (params) => (
        <Link to={`/admin/specialty/update/${params.row.id}`}>
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
        <StyledAdminDeleteButton onClick={() => handleDeleteSpecialty(params.row.id)}>
          <p><DeleteIcon/></p>
        </StyledAdminDeleteButton>
      ),
    },
  ];

  const formattedDate = `${currentDate.toLocaleDateString()} at ${currentDate.toLocaleTimeString()}`;

  return (
    <div className="admin-display">
      <AdminHeader>
        <StyledAdminActivitySection>
          <StyledAdminActivityTitle>Specialties list</StyledAdminActivityTitle>
          <StyledAdminActivitySubtitle>Last update {formattedDate}</StyledAdminActivitySubtitle>
        </StyledAdminActivitySection>

      </AdminHeader>

      <StyledAdminAction>
        <Link to={ROUTES.SPECIALTIESADD}>
          {" "}
          <StyledAdminAddButton>Add Specialty</StyledAdminAddButton>{" "}
        </Link>
      </StyledAdminAction>

      <StyledAdminTable
        rows={specialties}
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