import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

export default function Header () {
  return(
		<Link to="/">
    	<div className="heading">
	      <h1>UniProjeta</h1>
    	</div>
	  </Link>
  );
}
