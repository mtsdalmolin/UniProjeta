import React, { useState } from 'react';

import './Nav.css';

export default function Nav () {
	const {searchFilter, setSearchFilter} = useState();

  function onChangeHandler() {
  	console.log(`kkkk`);
  	// setSearchFilter();
  }

  return(
    <div className="nav">
      <a href="https://github.com/mtsdalmolin/UniProjeta" rel="noopener" ><i className="fab fa-github"></i></a>
        <div className="input-group">
          <input 
          	className="search" 
          	type="text" 
          	placeholder="Digite o nome da Universidade"
          	onChange={onChangeHandler}
          />
          <span className="bar"></span>
        </div> 
      </div>
  );
}