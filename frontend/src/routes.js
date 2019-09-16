import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages/Main.js';
import Header from './pages/Header.js';
import Nav from './pages/Nav.js';
import Main from './pages/Main.js';

const Universidade = ({ match }) => <h3>ID: { match.params.id }</h3>;

function AppRouter() {
  return (
    <Router>
      <div>
        < Header />
        < Nav >
          <Route path="/" exact component={Main} />
          <Route path="/Universidade/:id"component={Universidade} />
        </ Nav>

      </div>
    </Router>
  );
}

export default AppRouter;