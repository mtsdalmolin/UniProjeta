import React from 'react';
import './List.css';

export default function List (props) {
  return(
    <div className="list">
      {props.list ? props.list.map( org => (
          <div key={ org._id } className="num" onClick={ () => props.handleClick(org._id) }>
              <span className="university">{org.name}</span>
          </div>)
      ) : ''}
    </div>
  );
}