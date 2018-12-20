

import { RECEIVE_CURRENT_USER } from '../../../actions/session_actions';
import { RECEIVE_ALL_PLAYLISTS, RECEIVE_ONE_PLAYLIST } from '../../../actions/music_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_PLAYLISTS:
      return action.payload.users;
    case RECEIVE_ONE_PLAYLIST:
      return Object.assign({}, state,  action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;
