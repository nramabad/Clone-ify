import { RECEIVE_ONE_ALBUM, RECEIVE_ALL_ALBUMS } from '../../../actions/music_actions';

const albumsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_ALBUM:
      return Object.assign({}, state, { [action.payload.album.id]: action.payload.album })
    case RECEIVE_ALL_ALBUMS:
      return action.albums
    default:
      return state;
  }
}

export default albumsReducer;
