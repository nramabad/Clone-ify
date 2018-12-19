import { RECEIVE_ONE_PLAYLIST, RECEIVE_ALL_PLAYLISTS } from '../../../actions/music_actions';


const playlistSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_PLAYLIST:
      return Object.assign({}, state, action.payload.playlistSongs)
    case RECEIVE_ALL_PLAYLISTS:
      debugger
      return action.payload.playlistSongs;
    default:
      return state;
  }
};

export default playlistSongsReducer;
