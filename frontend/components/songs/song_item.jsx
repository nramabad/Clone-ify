import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const SongItem = ({song}) =>(
    <li>
      <div className='song-item'>
        <div className="music-icon"></div>{song.title}<div>{Math.floor(song.duration/60)}:{song.duration % 60 < 10 ? `0${song.duration % 60}` : song.duration % 60}</div>
      </div>
      <div>
        {song.artist_name}
      </div>
    </li>
);


export default SongItem;
