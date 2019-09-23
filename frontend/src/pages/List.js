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
          <div className="num" onClick={() => handleClick(org._id)}>
              <h3>{org.name}</h3>
          </div>)
      }));
    }
    loadOrgs();
  }, []);

  return(
      <div>
        <div className="list">
          {orgs}
        </div>
      </div>
  );
}