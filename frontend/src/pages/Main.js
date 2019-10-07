import React, { useEffect, useState } from 'react';
import Header from './Header';
import SearchInput from './Search';
import List from './List';

import './Main.css';
import api from '../services/api';

const ENTER_KEY = 13;
const SPACE_KEY = 32;

export default function Main (props) {
  const [orgs, setOrgs] = useState();
  const [searchFilter, setSearchFilter] = useState();

  function handleClick(orgId) {
    props.history.push(`/university/${orgId}`);
  }

  function handleChange(e) {
    if (e.keyCode !== SPACE_KEY)
      setSearchFilter(e.target.value);
  }
  
  function handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY)
      setSearchFilter(e.target.value);
  }

  useEffect(() => {
    async function loadOrgs() {
      const response = await api.get('/orgs',{
        headers: { 
          name: searchFilter
        }
      });
      setOrgs(response.data);
    }
    loadOrgs();
  }, [searchFilter]);

  return(
    <>
      <Header />
      <div className="container">
        <div className="nav">
          <a href="https://github.com/mtsdalmolin/UniProjeta" rel="noopener" ><i className="fab fa-github"></i></a>
          <SearchInput 
            onChange={ handleChange }
            onKeyDown={ handleKeyDown }
          /> 
        </div>
        <List 
          history={ props.history }
          handleClick={ handleClick }
          list={ orgs }
        />
      </div>
    </>
  );
}