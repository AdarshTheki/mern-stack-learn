export const errorHandler = (error) => {
  if (!error) return null;
  if (error.response && error.response.status === 301) {
    alert('Error: ' + error.response?.data?.message);
    window.location.href = '/'; // Redirect to login page
  } else if (error.response && error.response.status === 401) {
    alert('Error: ' + error.response?.data?.message);
  } else {
    alert('Error: ' + error.response?.data?.message);
  }
};
