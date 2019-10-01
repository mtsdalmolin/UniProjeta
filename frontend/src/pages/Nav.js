import React from 'react';

import './Nav.css';

export default function Nav () {
  return(
    <div className="nav">
      <a href="https://github.com/mtsdalmolin/UniProjeta" rel="noopener" ><i className="fab fa-github"></i></a>
        <div className="input-group">
          <input className="search" type="text" placeholder="Digite o nome da Universidade"/><span className="bar"></span>
        </div> 
      </div>
  );
}