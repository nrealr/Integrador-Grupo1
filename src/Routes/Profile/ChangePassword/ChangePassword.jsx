import { useState } from 'react';
import { AccountContainer, AccountHeader, AccountForm, AccountField, AccountButton } from './ChangePassword.styled';
import { useDoctorStates } from "../../../Context";
import { changeUserPassword, getUsersById } from "../../../Services/Users";
import { login } from "../../../Services/Users";

export const ChangePassword = () => {
  const { currentUser } = useDoctorStates();
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwords;

    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters long.');
      return;
    }

    try {
      // Verify current password
      const userData = await getUsersById();
      await login({ email: userData.email, password: currentPassword });

      // If login is successful, change password
      await changeUserPassword(currentUser.id, { password: newPassword });
      setSuccess("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password: ", error.response || error);
      setError("Failed to change password. Please ensure your current password is correct.");
    }
  };

  return (
    <AccountContainer>
      <AccountHeader>
        Change Password
      </AccountHeader>

      <AccountForm onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <AccountField
          label="Current Password"
          name="currentPassword"
          type="password"
          value={passwords.currentPassword}
          onChange={handleInputChange}
        />
        <AccountField
          label="New Password"
          name="newPassword"
          type="password"
          value={passwords.newPassword}
          onChange={handleInputChange}
        />
        <AccountField
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
          value={passwords.confirmPassword}
          onChange={handleInputChange}
        />

        <AccountButton type="submit" variant="contained" color="primary">
          Change Password
        </AccountButton>
      </AccountForm>
    </AccountContainer>
  );
};