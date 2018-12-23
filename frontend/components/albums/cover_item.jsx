import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const CoverItem = ({item}) => (
      <li className='album-item'>
        <Link to={`/album/${item.id}`}>
          <img src={item.cover_url || 'https://s3-us-west-1.amazonaws.com/clone-ify-public/misc/default_cover.jpg'} alt='it broke :('/>
          <div className='subtitle'>{item.title}</div>
          <div className='maker'>{item.artist}</div>
        </Link>
      </li>
);


export default CoverItem;
