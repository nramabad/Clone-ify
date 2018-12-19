import { combineReducers } from 'redux';

import usersReducer from './users/users_reducer';
import songsReducer from './songs/songs_reducer';
import albumsReducer from './albums/albums_reducer';
import playlistsReducer from './playlists/playlists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer,
  playlists: playlistsReducer
});

export default entitiesReducer;
