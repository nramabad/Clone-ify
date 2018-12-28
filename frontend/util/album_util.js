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

export const searchAlbums = query =>
  $.ajax({
    url: `/api/albums/search`,
    method: "GET",
    data: { query }
  });