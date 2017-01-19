
export const followUser = (follow) => (
  $.ajax({
  		method: 'POST',
  		url: '/api/follows',
  		data: {follow}
  	})
);
