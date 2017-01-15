export const fetchUser = (user) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}`,
    data: {user}
  })
);

export const updatesUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user}
  })
);
