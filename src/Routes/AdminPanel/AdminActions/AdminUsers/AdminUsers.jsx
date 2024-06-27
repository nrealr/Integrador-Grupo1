import { useEffect, useState } from "react";
import { getUsers, changeUserRole } from "../../../../Services";
import {
    StyledAdminTable,
    StyledAdminActivitySection,
    StyledAdminActivitySubtitle,
    StyledAdminActivityTitle,
    AdminHeader,
} from "./AdminUsers.styled";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());

    const loadUsers = async () => {
        try {
            let userData = await getUsers();
            setUsers(userData);
        } catch (error) {
            console.error("Error loading users:", error);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleChangeRole = async (id, currentRole) => {
        const newRoleId = currentRole === "ADMINISTRATOR" ? 2 : 1;

        try {
            await changeUserRole(id, newRoleId);
            loadUsers();
        } catch (error) {
            console.error("Error changing user role:", error);
            alert("Failed to change user role. Please try again.");
        }
    };

    const currentUserId = localStorage.getItem('id'); // Obtener el ID del usuario actual

    const columns = [
        { field: "id", headerName: "ID", width: 70, flex: 1 },
        { field: "name", headerName: "Name", width: 130, flex: 2 },
        { field: "lastname", headerName: "Lastname", width: 130, flex: 2 },
        { field: "email", headerName: "Email", width: 200, flex: 2 },
        { field: "role", headerName: "Role", width: 130, flex: 2 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => (
                <button
                    onClick={() => handleChangeRole(params.row.id, params.row.role)}
                    disabled={parseInt(currentUserId) === params.row.id} // Deshabilitar el botón si es el mismo usuario
                >
                    Change Role
                </button>
            ),
        },
    ].filter(column => users.some(user => user[column.field] !== null));

    const formattedDate = `${currentDate.toLocaleDateString()} at ${currentDate.toLocaleTimeString()}`;

    return (
        <div className="admin-display">
            <AdminHeader>
                <StyledAdminActivitySection>
                    <StyledAdminActivityTitle>
                        Registered Users
                    </StyledAdminActivityTitle>
                    <StyledAdminActivitySubtitle>
                        Last update {formattedDate}
                    </StyledAdminActivitySubtitle>
                </StyledAdminActivitySection>

                <section className="admin-user">
                    <p>👤 Admin</p>
                </section>
            </AdminHeader>

            <StyledAdminTable
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                columnWidth={150}
                disableSelectionOnClick // Desactivar selección al hacer clic
                sx={{
                    ".MuiDataGrid-columnHeaders": { flex: 1 },
                    ".MuiDataGrid-cell": { flex: 1 },
                }}
            />
        </div>
    );
};
