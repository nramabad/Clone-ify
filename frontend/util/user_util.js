export const fetchOneUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
);

export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
);
