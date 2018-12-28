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

export const searchSongs = query =>
  $.ajax({
    url: `/api/songs/search`,
    method: "GET",
    data: { query }
  });