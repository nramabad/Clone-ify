export const albumSongsSelector = (state, albumId) => (
  Object.values(state.entities.songs).filter( song => song.album_id == albumId )
)

export const playlistSongsSelector = (state, playlistId) => (
  Object.values(state.entities.playlistSongs)
    .filter( song => song.playlist_id == playlistId )
    .map( song => state.entities.songs[song.song_id] )
)
