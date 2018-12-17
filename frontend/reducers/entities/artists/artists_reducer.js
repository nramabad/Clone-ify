import { RECEIVE_ONE_ARTISTS, RECEIVE_ALL_ARTIST } from '../actions/music_actions';

const artistsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_ARTIST:
      return Object.assign({}, state, { [action.payload.artist.id]: action.payload.artist})
    case RECEIVE_ALL_ARTISTS:
      return action.artists
    default:
      return state;
  }
}

export default artistsReducer;
