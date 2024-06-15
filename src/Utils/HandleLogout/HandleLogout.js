export const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  window.location.href = '/';
};