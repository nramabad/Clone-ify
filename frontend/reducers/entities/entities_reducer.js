import { combineReducers } from 'redux';

import usersReducer from './users/users_reducer';
import songsReducer from './songs/songs_reducer';
import albumsReducer from './albums/albums_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer
});

export default entitiesReducer;
