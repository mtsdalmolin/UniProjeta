import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './pages/Main';
import University from './pages/University';

export default function Routes() {
  return (
    <Router>
    	<Route path="/" exact component={ Main } />
    	<Route path="/university/:id" component={ University }/>
    </Router>
  );
}