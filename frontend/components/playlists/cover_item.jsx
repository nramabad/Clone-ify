import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';


const CoverItem = ({item}, {users}) => (
      <li className='album-item'>
        <Link to={`/playlist/${item.id}`}>
          <img src={item.cover_url} alt='it broke :('/>
          <div>{item.title}</div>
        </Link>
      </li>
);


export default CoverItem;


//           <div className='maker'>{users[item.u]}</div>
