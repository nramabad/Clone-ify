import { SET_QUEUE, ADD_TO_QUEUE } from '../../actions/player_actions';

const queueReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_QUEUE:
      return action.queue;
    case ADD_TO_QUEUE:
      const newState = state.slice().push(action.song);
      return newState
    default:
      return state;

  }
}

export default queueReducer;
