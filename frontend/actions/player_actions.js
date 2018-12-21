export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const SET_QUEUE = 'SET_QUEUE';
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  song
})

export const togglePlay = () => ({
  type: TOGGLE_PLAY
})

export const setQueue = (queue) => ({
  type: SET_QUEUE,
  queue
})

export const addToQueue = (song) => ({
  type: ADD_TO_QUEUE,
  song
})
