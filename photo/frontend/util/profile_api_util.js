export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const updatesUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user}
  })
);
