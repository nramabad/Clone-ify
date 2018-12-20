export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';


export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  song
})

export const togglePlay = () => ({
  type: TOGGLE_PLAY
})
