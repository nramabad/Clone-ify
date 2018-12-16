export const fetchOneArtist = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${artistId}`
  })
);

export const fetchAllArtists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/artists'
  })
);
