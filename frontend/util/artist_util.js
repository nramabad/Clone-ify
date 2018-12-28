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

export const searchArtists = query =>
  $.ajax({
    url: `/api/artists/search`,
    method: "GET",
    data: { query }
  });