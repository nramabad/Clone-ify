export const fetchOnePlaylist = (playlistId) => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${playlistId}`
  })
);

export const fetchAllPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/playlists'
  })
);

export const createPlaylist = (playlist) => (
  $.ajax({
    method: 'POST',
    url: `api/playlists`,
    data: { playlist }
  })
);

export const deletePlaylist = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${id}`
  })
);

export const addSongToPlaylist = (data) => (
  $.ajax({
    method: 'POST',
    url: '/api/playlist_songs',
    data: { playlist_song: data }
  })
)

export const removeSongFromPlaylist = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlist_songs/${id}`
  })
)
