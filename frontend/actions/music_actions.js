
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_ONE_ALBUM = 'RECEIVE_ONE_ALBUM';
export const RECEIVE_ONE_SONG = 'RECEIVE_ONE_SONG';
export const RECEIVE_ONE_ARTIST = 'RECEIVE_ONE_ARTIST';
export const RECEIVE_ONE_PLAYLIST = 'RECEIVE_ONE_PLAYLIST';
export const REMOVE_ONE_PLAYLIST_SONG = 'REMOVE_ONE_PLAYLIST_SONG';
export const REMOVE_ONE_PLAYLIST = 'REMOVE_ONE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';

import * as AlbumApiUtil from '../util/album_util'
import * as ArtistApiUtil from '../util/artist_util'
import * as PlaylistApiUtil from '../util/playlist_util'
import * as SongApiUtil from '../util/song_util'

export const receiveOneAlbum = (payload) => ({
  type: RECEIVE_ONE_ALBUM,
  payload
});

export const receiveAllAlbums = (payload) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums: payload.albums,
  songs: payload.songs
});

export const receiveOneArtist = (payload) => ({
  type: RECEIVE_ONE_ARTIST,
  payload
});

export const receiveAllArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const receiveOnePlaylist = (payload) => ({
  type: RECEIVE_ONE_PLAYLIST,
  payload
});

export const receiveAllPlaylists = (payload) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  payload
});

export const removeOnePlaylistSong = id => ({
  type: REMOVE_ONE_PLAYLIST_SONG,
  id
});

export const removeOnePlaylist = (playlist) => ({
  type: REMOVE_ONE_PLAYLIST,
  playlist
});

export const receivePlaylistErrors = (errors) => ({
  type: RECEIVE_PLAYLIST_ERRORS,
  errors
})

export const receiveOneSong = (song) => ({
  type: RECEIVE_ONE_SONG,
  song
});

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const requestOneAlbum = (albumId) => (dispatch) => (
  AlbumApiUtil.fetchOneAlbum(albumId)
    .then(album => dispatch(receiveOneAlbum(album)))
);

export const requestAllAlbums = () => (dispatch) => (
  AlbumApiUtil.fetchAllAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
);

export const requestSearchedAlbums = query => dispatch =>
  AlbumApiUtil.searchAlbums(query).then(albums =>
    dispatch(receiveAllAlbums(albums))
);

export const requestOneArtist = artistId => dispatch =>
  ArtistApiUtil.fetchOneArtist(artistId).then(artist =>
    dispatch(receiveOneArtist(artist))
);

export const requestAllArtists = () => (dispatch) => (
  ArtistApiUtil.fetchAllArtists()
    .then(songs => dispatch(receiveAllArtists(songs)))
);

export const requestSearchedArtists = query => dispatch => 
  ArtistApiUtil.searchArtists(query).then(artists =>
    dispatch(receiveAllArtists(artists))
  );

export const requestOnePlaylist = (playlistId) => (dispatch) => (
  PlaylistApiUtil.fetchOnePlaylist(playlistId)
    .then(playlist => dispatch(receiveOnePlaylist(playlist)))
);

export const requestAllPlaylists = () => (dispatch) => (
  PlaylistApiUtil.fetchAllPlaylists()
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
);

export const createPlaylist = (playlist) => (dispatch) => (
  PlaylistApiUtil.createPlaylist(playlist)
    .then( playlist => dispatch(receiveOnePlaylist(playlist)) )
);

export const deletePlaylist = (id) => (dispatch) => (
  PlaylistApiUtil.deletePlaylist(id)
    .then( playlist => dispatch(receiveAllPlaylists(playlist)) )
);

export const requestSearchedPlaylists = query => dispatch => 
  PlaylistApiUtil.searchPlaylists(query).then(playlists =>
    dispatch(receiveAllPlaylists(playlists))
);

export const addSongToPlaylist = (data) => (dispatch) => (
  PlaylistApiUtil.addSongToPlaylist(data)
    .then( null, errors => dispatch(receivePlaylistErrors(errors.responseJSON)) )
);

export const removeSongFromPlaylist = (id) => (dispatch) => (
  PlaylistApiUtil.removeSongFromPlaylist(id)
    .then( (id) => dispatch(removeOnePlaylistSong(id)),
            errors => dispatch(receivePlaylistErrors(errors.responseJSON)) )
);

export const requestOneSong = (songId) => (dispatch) => (
  SongApiUtil.fetchOneSong(songId)
    .then(song => dispatch(receiveOneSong(song)))
);

export const requestAllSongs = () => (dispatch) => (
  SongApiUtil.fetchAllSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
);

export const requestSearchedSongs = (query) => (dispatch) => {
  return (
    SongApiUtil.searchSongs(query)
      .then(songs => dispatch(receiveAllSongs(songs)))
  )
}