import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const CoverItem = ({album}) => (
      <li className='album-item'>
        <img src={album.cover_url} alt='it broke :('/>
        <div>{album.title}</div>
        <div className='maker'>{album.artist}</div>
      </li>
);


export default CoverItem;
