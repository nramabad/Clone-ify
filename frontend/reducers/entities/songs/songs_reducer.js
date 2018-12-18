import { RECEIVE_ONE_SONG, RECEIVE_ALL_SONGS, RECEIVE_ONE_ALBUM, RECEIVE_ONE_ARTIST, RECEIVE_ONE_PLAYLIST } from '../../../actions/music_actions';

const songsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_SONG:
      return Object.assign({}, state, action.song)
    case RECEIVE_ALL_SONGS:
      return action.songs
    case RECEIVE_ONE_ALBUM:
      return action.payload.songs
    case RECEIVE_ONE_ARTIST:
      return action.payload.songs
    case RECEIVE_ONE_PLAYLIST:
      if (action.payload.songs) {
        return action.payload.songs
      } else {
        return {};
      }
    default:
      return state;
  }
}

export default songsReducer;
