export const fetchOneSong = (songId) => (
  $.ajax({
    method: 'GET',
    url: `api/songs/${songId}`
  })
);

export const fetchAllSongs = () => (
  $.ajax({
    method: 'GET',
    url: 'api/songs'
  })
);

export const searchSongs = searchTerm =>
  $.ajax({
    url: `/api/songs/search`,
    method: "GET",
    data: { search_term: searchTerm }
  });