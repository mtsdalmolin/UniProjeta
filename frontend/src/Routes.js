import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './pages/index'
import Header from './pages/Header/header'

const Universidade = ({ match }) => <h3>ID: {match.params.id}</h3>

function AppRouter() {
  return (

    <Router>
      <div>
        < Header />

        <Route path="/" exact component={Index} />
        <Route path="/Universidade/:id"component={Universidade} />
      </div>
    </Router>
  );
}

export default AppRouter;