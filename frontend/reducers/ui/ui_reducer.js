import { combineReducers } from 'redux';

// change below to paused or not and stuff

import currentSongReducer from './current_song_reducer';
import togglePlayReducer from './toggle_play_reducer';
// import modalReducer from '.modal_reducer';

export default combineReducers({
  currentSong: currentSongReducer,
  togglePlay: togglePlayReducer
  // accountModal: modalReducer
});

// is this right? dun think so
