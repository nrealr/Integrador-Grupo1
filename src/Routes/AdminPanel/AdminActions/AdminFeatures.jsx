import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import { getFeatures, deleteFeature } from '../../../Services/Features';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdminHeader, StyledAdminAction, StyledAdminActivitySection, StyledAdminActivitySubtitle, StyledAdminActivityTitle, StyledAdminAddButton, StyledAdminDeleteButton, StyledAdminTable } from './AdminFeatures.styled';

export const AdminFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const loadFeatures = async () => {
    let featureData = await getFeatures();
    setFeatures(featureData);
  };

  const handleDeleteFeature = async (featureId) => {
    await deleteFeature(featureId);
    loadFeatures();
  };

  useEffect(() => {
    loadFeatures();
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
      field: 'icon',
      headerName: 'Icon',
      width: 90,
      flex: 1,
      renderCell: (params) => (
        <div>
          {params.row.icon ? (
            <img src={`data:image/jpg;base64,${params.row.icon}`} alt={params.row.name} className="feature-icon" />
          ) : (
            'No Icon Available'
          )}
        </div>
      ),
    },
    {
      field: 'update',
      headerName: 'Update',
      width: 80,
      flex: 1,
      renderCell: (params) => (
        <Link to={`/admin/features/update/${params.row.id}`}>
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
        <StyledAdminDeleteButton onClick={() => handleDeleteFeature(params.row.id)}>
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
          <StyledAdminActivityTitle>Features List</StyledAdminActivityTitle>
          <StyledAdminActivitySubtitle>Last update {formattedDate}</StyledAdminActivitySubtitle>
        </StyledAdminActivitySection>

        <section className="admin-user">
          <p>👤 Admin</p>
        </section>
      </AdminHeader>

      <StyledAdminAction>
        <Link to={ROUTES.FEATURESADD}>
          {" "}
          <StyledAdminAddButton>Add Feature</StyledAdminAddButton>{" "}
        </Link>
      </StyledAdminAction>

      <StyledAdminTable
        rows={features}
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