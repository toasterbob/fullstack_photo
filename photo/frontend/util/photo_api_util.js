
export const uploadPic = (picture) => (
  $.ajax({
    method: 'POST',
    url: 'api/pictures',
    data: {picture}
  })
);

export const getAllPhotos = (photos) => (
  $.ajax({
    method: 'GET',
    url: 'api/pictures',
    data: {photos}
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
