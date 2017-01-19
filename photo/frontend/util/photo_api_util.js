
export const uploadPic = (picture) => (
  $.ajax({
    method: 'POST',
    url: 'api/pictures',
    data: {picture}
  })
);

export const getAllPhotos = (id) => (
  $.ajax({
    method: 'GET',
    url: 'api/pictures',
    data: {id}
  })
);

export const getFeedPhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pictures',
    data: {feed: true}
  })
);


export const getPhoto = (photo) => (
  $.ajax({
    method: 'GET',
    url: `api/pictures/${photo.id}`,
    data: {photo}
  })
);

export const removePhoto = (photo) => (
  $.ajax({
    method: 'DELETE',
    url: `api/pictures/${photo.id}`,
    data: {photo}
  })
);
