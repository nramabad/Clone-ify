import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

const SongItem = ({song}) =>(
      <li className='song-item'>
        <div>{song.title}</div><div>{song.duration}</div>
      </li>
);


export default SongItem;
