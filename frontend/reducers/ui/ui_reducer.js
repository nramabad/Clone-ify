import { combineReducers } from 'redux';

// change below to paused or not and stuff

import currentSongReducer from './current_song_reducer';

export default combineReducers({
  currentSong: currentSongReducer
});

// is this right? dun think so
