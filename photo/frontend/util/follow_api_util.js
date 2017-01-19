
export const followUser = (follow) => (
  $.ajax({
  		method: 'POST',
  		url: '/api/follows',
  		data: {follow}
  	})
);

export const unfollowUser = (id) => (
  $.ajax({
   method: 'DELETE',
   url: `api/users/${id}/follow`
 })
);
