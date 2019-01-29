import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const CoverItem = ({item}) => (
      <li className='album-item'>
        <Link to={`/artist/${item.id}`}>
          <img className='artist-item' src={item.photo_url} alt='it broke :('/>
          <div className='subtitle'>{item.name}</div>
        </Link>
      </li>
);


export default CoverItem;
