export const fetchOneAlbum = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}`
  })
);

export const fetchAllAlbums = () => (
  $.ajax({
    method: 'GET',
    url: 'api/albums'
  })
);
