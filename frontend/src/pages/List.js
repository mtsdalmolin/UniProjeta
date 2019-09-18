import React, { useEffect, useState } from 'react';

import api from '../services/api';

export default function List ({ history }) {
  // const orgId = match.params.id;
  const [orgs, setOrgs] = useState();

  function handleClick(orgId) {
    history.push(`/university/${orgId}`);
  }

  useEffect(() => {
    async function loadOrgs() {
      const response = await api.get('/orgs');
      setOrgs(response.data.map( org => {
        return (
          <div className="num" id={org._id} onClick={() => handleClick(org._id)}>
              <h3>{org.name}</h3>
          </div>)
      }));
    }
    loadOrgs();
  }, []);

  return(
      <div>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-KwxQKNj2D0XKEW5O/Y6haRH39PE/xry8SAoLbpbCMraqlX7kUP6KHOnrlrtvuJLR" crossorigin="anonymous"/>
        <div className="list">
          {orgs}
        </div>
      </div>
  );
}