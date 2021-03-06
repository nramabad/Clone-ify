import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store.js'
// import {login, signup, loginDemo} from './util/session_api_util'
// import {fetchAllAlbums} from './util/album_util'
// import {fetchAllArtists} from './util/artist_util'
import {fetchAllPlaylists} from './util/playlist_util'
// import {fetchAllSongs} from './util/song_util'
import {setCurrentSong, togglePlay} from './actions/player_actions'
// import {requestOneAlbum, requestAllPlaylists} from './actions/music_actions'
import {requestAllSongs} from './actions/music_actions'
// import {logout} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  // window.fetchAllAlbums = fetchAllAlbums
  // window.fetchAllArtists = fetchAllArtists
  // window.fetchAllPlaylists = fetchAllPlaylists
  // window.requestOneAlbum = requestOneAlbum
  window.requestAllSongs = requestAllSongs
  window.setCurrentSong = setCurrentSong
  window.togglePlay = togglePlay
  // window.requestAllPlaylists = requestAllPlaylists
  // window.login = login;
  // window.loginDemo = loginDemo;
  // window.signup = signup;
  // window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.logout = logout;

  ReactDOM.render(<Root store={ store }/>, root);
});
