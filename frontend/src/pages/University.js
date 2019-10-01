import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';

import Header from './Header';
import './University.css';

import api from '../services/api';

export default function University ({ match }) {
  const [university, setUniversity] = useState();

  useEffect(() => {
    async function loadUniversity() {
      const response = await api.get(`/orgs/${match.params.id}`);
      setUniversity(JSON.stringify(response.data));
    }

    loadUniversity();
  }, [match.params.id]);

  return (
    <div>
      <div className="heading">
        <Header />
      </div>
      <div className="container">
        <div>
          { university ? 
            <div>
              <h1>{JSON.parse(university).name}</h1>
              <h1>{JSON.parse(university).initials}</h1>
              <h1>{JSON.parse(university).SIAFI}</h1>
              <h1>{JSON.parse(university).state}</h1>
              {JSON.parse(university).data.map( info => (
                <Collapsible trigger={info.year}>
                  <p>
                    <h3>Despesas:</h3>
                    <ul>
                      <li>Empenhado: {info.expenses.committed}</li>
                      <li>Liquidado: {info.expenses.settled}</li>
                      <li>Pago: {info.expenses.paid}</li>
                    </ul>
                    <h3>IGC:</h3>
                    <ul>
                      <li>Continuo: {info.igc_cont_value}</li>
                      <li>Discreto: {info.igc_value}</li>
                    </ul>
                  </p>
                </Collapsible>
              ))}
            </div>
          : ''}
        </div>
      </div>
    </div>
  );
}