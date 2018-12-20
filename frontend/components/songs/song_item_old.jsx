import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const SongItem = ({song, removeSongFromPlaylist}) =>(

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
      <div className='right'>
        <div>
          <input id="check01" type="checkbox" name="dropdown"/>
          <label for="check01"><div className='dot-button'></div></label>
          <ul class="submenu">
            <li><Link to="/browse/featured" >Play</Link></li>
            <li><Link to="/browse/featured" >Add to Playlist</Link></li>

            <li><Link to="/browse/featured"} >Remove from Playlist</Link></li>
          </ul>
        </div>
        <div className='duration'>
          {Math.floor(song.duration/60)}:{song.duration % 60 < 10 ? `0${song.duration % 60}` : song.duration % 60}
        </div>
      </div>
    </li>

);


export default SongItem;

//onClick={this.props.removeSongFromPlaylist
