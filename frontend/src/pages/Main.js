import React from 'react';
import './Main.css';

import Header from './Header';
import Nav from './Nav';
import List from './List';

export default function Main ({ history }) {
  return(
    <div>
      <div className="heading">
        <Header />
      </div>
      <div className="container">
        <Nav />
        <List history={history}/>
      </div>
    </div>
  );
}