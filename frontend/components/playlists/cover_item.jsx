import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const CoverItem = ({item}, {users}) => (
      <li className='album-item'>
        <Link to={`/album/${item.id}`}>
          <img src={item.cover_url} alt='it broke :('/>
          <div>{item.title}</div>
          <div className='maker'>{users[item.user_id]}</div>
        </Link>
      </li>
);


export default CoverItem;
