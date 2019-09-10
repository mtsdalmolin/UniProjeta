import React, { Component } from 'react';

import './nav.css'

export default class Nav extends Component {
  render() {
    return(
      <div className="nav">
        <a href="https://github.com/mtsdalmolin/UniProjeta" rel="noopener" ><i className="fab fa-github"></i></a>
          <div class="input-group">
            <input class="search" type="text" placeholder="Digite o nome da Universidade"/><span class="bar"></span>
          </div> 
      </div>
    );
  }
}