import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const AlbumItem = ({album}) =>(
      <li className='album-item'>
        <img src={album.cover_url} alt='it broke :('/><div className='bold-text'>{album.title}</div><div>{album.artist}</div>
      </li>
);


export default AlbumItem;
