import React, { useEffect, useState } from 'react';
// VIEWS
import Header from './Header';
// STYLES
import './Main.css';
// SERVICE
import api from '../services/api';

const ENTER_KEY = 13;
const SPACE_KEY = 32;

export default function Main ({ history }) {
  const [orgs, setOrgs] = useState();
  const [searchFilter, setSearchFilter] = useState();

  function handleClick(orgId) {
    history.push(`/university/${orgId}`);
  }

  function onChangeHandler(e) {
    if (e.keyCode !== SPACE_KEY)
      setSearchFilter(e.target.value);
  }
  
  function onKeyDownHandler(e) {
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
      setOrgs(response.data.map( org => {
        return (
          <div className="num" onClick={ () => handleClick(org._id) }>
              <h3>{org.name}</h3>
          </div>)
      }));
    }
    loadOrgs();
  }, [searchFilter]);

  return(
    <div>
      <div className="heading">
        <Header />
      </div>
      <div className="container">
        <div className="nav">
          <a href="https://github.com/mtsdalmolin/UniProjeta" rel="noopener" ><i className="fab fa-github"></i></a>
            <div className="input-group">
              <input 
                className="search" 
                type="text" 
                placeholder="Digite o nome da Universidade"
                onChange={ e => onChangeHandler(e) }
                onKeyDown={ e => onKeyDownHandler(e) }
              />
              <span className="bar"></span>
            </div> 
          </div>
        <div className="list">
          {orgs}
        </div>
      </div>
    </div>
  );
}