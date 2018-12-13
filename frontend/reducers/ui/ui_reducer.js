import { combineReducers } from 'redux';

// change below to paused or not and stuff

import currentSongReducer from './current_song_reducer';
import modalReducer from '.modal_reducer';

export default combineReducers({
  // currentSong: currentSongReducer,
  // accountModal: modalReducer
});

// is this right? dun think so
