
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_ONE_ALBUM = 'RECEIVE_ONE_ALBUM';
export const RECEIVE_ONE_SONG = 'RECEIVE_ONE_SONG';
export const RECEIVE_ONE_ARTIST = 'RECEIVE_ONE_ARTIST';
export const RECEIVE_ONE_PLAYLIST = 'RECEIVE_ONE_PLAYLIST';
export const REMOVE_ONE_PLAYLIST = 'REMOVE_ONE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';

import * as AlbumApiUtil from '../util/Album_util'
import * as ArtistApiUtil from '../util/artist_util'
import * as PlaylistApiUtil from '../util/playlist_util'
import * as SongApiUtil from '../util/song_util'

export const receiveOneAlbum = (payload) => ({
  type: RECEIVE_ONE_ALBUM,
  payload
});

export const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
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

export const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
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

export const fetchOneAlbum = (albumId) => (dispatch) => (
  AlbumApiUtil.fetchOneAlbum(albumId)
    .then(album => dispatch(receiveOneAlbum(album)))
);

export const fetchAllAlbums = () => (dispatch) => (
  AlbumApiUtil.fetchAllAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
);

export const fetchOneArtist = (artistId) => (dispatch) => (
  ArtistApiUtil.fetchOneArtist(artistId)
    .then(artist => dispatch(receiveOneArtist(artist)))
);

export const fetchAllArtists = () => (dispatch) => (
  ArtistApiUtil.fetchAllArtists()
    .then(songs => dispatch(receiveAllArtists(songs)))
);

export const fetchOnePlaylist = (playlistId) => (dispatch) => (
  PlaylistApiUtil.fetchOnePlaylist(playlistId)
    .then(playlist => dispatch(receiveOnePlaylist(playlist)))
);

export const fetchAllPlaylists = () => (dispatch) => (
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

export const fetchOneSong = (songId) => (dispatch) => (
  SongApiUtil.fetchOneSong(songId)
    .then(song => dispatch(receiveOneSong(song)))
);

export const fetchAllSongs = () => (dispatch) => (
  SongApiUtil.fetchAllSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
);
