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

  function applyExpenseMask(number) {
    number = number.replace('.', ',');
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

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
              { JSON.parse(university).data.map( info => (
                <Collapsible trigger={info.year}>
                  <div className="content">
                    <div className="expenses-div">
                      <span>Despesas</span>
                      <div className="info">
                        <span className="info-label">Empenhado:</span>
                        <span className="info-value money">{applyExpenseMask(info.expenses.committed.toString())}</span>
                      </div>
                      <div className="info">
                        <span className="info-label">Liquidado:</span>
                        <span className="info-value money">{applyExpenseMask(info.expenses.settled.toString())}</span>
                      </div>
                      <div className="info">
                        <span className="info-label">Pago:</span>
                        <span className="info-value money">{applyExpenseMask(info.expenses.paid.toString())}</span>
                      </div>
                    </div>
                    <div className="igc-div">
                      <span>IGC</span>
                      <div className="info">
                        <span className="info-label">Contínuo:</span>
                        <span className="info-value">{info.igc_cont_value.toString().replace('.', ',')}</span>
                      </div>
                      <div className="info">
                        <span className="info-label">Discreto:</span>
                        <span className="info-value">{info.igc_value}</span>
                      </div>
                    </div>
                  </div>
                </Collapsible>
              )) }
            </div>
          : '' }
        </div>
      </div>
    </div>
  );
}