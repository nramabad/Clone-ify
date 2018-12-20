import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const SongItem = ({song}) =>(
    <li className='one-song'>
      <div className='song-item'>
        <div className="music-icon"></div>
        <div className='left'>
          {song.title}
          <div>
            {song.artist_name} ∙ {song.album_title}
          </div>
        </div>
      </div>
      <div>
        <div className='dot-button'></div>
        <div>
          {Math.floor(song.duration/60)}:{song.duration % 60 < 10 ? `0${song.duration % 60}` : song.duration % 60}
        </div>
      </div>
    </li>
);


export default SongItem;
