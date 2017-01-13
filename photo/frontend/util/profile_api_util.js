export const fetchUser = (user) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}`,
    data: {user}
  })
);
