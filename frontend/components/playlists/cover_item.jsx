import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const CoverItem = ({item, users}) => (
      <li className='album-item'>
        <Link to={`/playlist/${item.id}`}>
          <img src={item.cover_url} alt='it broke :('/>
          <div className='subtitle'>{item.title}</div>
          <div className='maker'>{users[item.user_id].username}</div>
        </Link>
      </li>
);


export default CoverItem;


//