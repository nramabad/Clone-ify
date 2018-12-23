import { combineReducers } from 'redux';
import currentSongReducer from './current_song_reducer';
import togglePlayReducer from './toggle_play_reducer';
import queueReducer from './current_song_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
  currentSong: currentSongReducer,
  togglePlay: togglePlayReducer,
  queueReducer: queueReducer,
  modalOpen: modalReducer
});
