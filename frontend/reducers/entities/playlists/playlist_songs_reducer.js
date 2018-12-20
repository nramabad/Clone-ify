import { RECEIVE_ONE_PLAYLIST, RECEIVE_ALL_PLAYLISTS, REMOVE_ONE_PLAYLIST_SONG } from '../../../actions/music_actions';


const playlistSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_PLAYLIST:
      return Object.assign({}, state, action.payload.playlistSongs)
    case RECEIVE_ALL_PLAYLISTS:
      return action.payload.playlistSongs;
    case REMOVE_ONE_PLAYLIST_SONG:
      let newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default playlistSongsReducer;
