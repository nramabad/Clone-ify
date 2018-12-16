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
