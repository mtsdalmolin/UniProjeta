import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import Loader from './Loader';
import Header from './Header';
import './University.css';

import api from '../services/api';

import CanvasJSReact from '../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function University ({ match }) {
  const [university, setUniversity] = useState();
  const [chartOptions, setChartOptions] = useState();

  useEffect(() => {
    let predDataPoints = [];
    let actualDataPoints = [];
    async function loadUniversity() {
      const response = await api.get(`/orgs/${ match.params.id }/dashboard`);
      const p_data = await api.get(`${ match.params.id }/predictions`);
      
      response.data.data.map( (info, index) => {
        info.predicted_igc = p_data.data[index].predicted_data.predicted_igc;

        predDataPoints.push({
          x: new Date(info.year.toString()),
          y: info.predicted_igc
        });

        actualDataPoints.push({
          x: new Date(info.year.toString()),
          y: info.igc_cont_value
        });
      });

      setChartOptions({
        theme: "light2",
        animationEnabled: true,
        title:{
          text: "Valores atual e previsto do IGC"
        },
        axisX: {
          title: "Ano"
        },
        axisY: {
          title: "Atual",
          titleFontColor: "#6D78AD",
          lineColor: "#6D78AD",
          labelFontColor: "#6D78AD",
          tickColor: "#6D78AD",
          includeZero: false,
          maximum: 5,
          minimum: 0
        },
        axisY2: {
          title: "Previsto",
          titleFontColor: "#51CDA0",
          lineColor: "#51CDA0",
          labelFontColor: "#51CDA0",
          tickColor: "#51CDA0",
          includeZero: false,
          maximum: 5,
          minimum: 0
        },
        toolTip: {
          shared: true
        },
        data: [{
          type: "spline",
          name: "Atual",
          showInLegend: true,
          dataPoints: actualDataPoints
        },
        {
          type: "spline",
          name: "Previsto",
          axisYType: "secondary",
          showInLegend: true,
          dataPoints: predDataPoints
        }]
      });

      setUniversity(JSON.stringify(response.data));
    }

    loadUniversity();
  }, [match.params.id]);

  function applyExpenseMask(number) {
    number = number.replace('.', ',');
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function discreteIGC(value) {
    let v = 0;
    switch(true) {
      case (value < 0.945):
        v = 1;
        break;
      case (value >= 0.945 && value < 1.945):
        v = 2;
        break;
      case (value >= 1.945 && value < 2.945):
        v = 3;
        break;
      case (value >= 2.945 && value < 3.945):
        v = 4;
        break;
      case (value >= 3.945 && value <= 5):
        v = 5;
        break;
    }
    return v;
  }

  return (
    <>
      <div className="heading">
        <Header />
      </div>
      <div className="container">
        <div>
          { university ? 
            <div>
              <span className="university-info">{JSON.parse(university).name}</span>
              <div className="info-under">
                <span className="university-info">Sigla: {JSON.parse(university).initials}</span>
                <span className="university-info">Cód. SIAFI: {JSON.parse(university).SIAFI}</span>
                <span className="university-info">UF: {JSON.parse(university).state}</span>
              </div>
              <CanvasJSChart options = {chartOptions}/>
              { JSON.parse(university).data.map( info => (
                <Collapsible key={info.year} trigger={info.year}>
                  <div className="content">
                    <div className="expenses-div">
                      <span>Despesas</span>
                      <div className="info">
                        <span className="info-label tooltip">Empenhado:
                              <span className="tooltiptext">Valor que o estado reservou para efetuar pagamentos planejados.</span>
                        </span>
                        <span className="info-value money">{ applyExpenseMask(info.expenses.committed.toString()) }</span>
                      </div>
                      <div className="info">
                        <span className="info-label tooltip">Liquidado:
                              <span className="tooltiptext">Valor reservado para quem prestou o serviço à instituição.</span>
                        </span>
                        <span className="info-value money">{ applyExpenseMask(info.expenses.settled.toString()) }</span>
                      </div>
                      <div className="info">
                        <span className="info-label tooltip">Pago:
                              <span className="tooltiptext">Valor já repassado aos prestadores de serviço.</span>
                        </span>
                        <span className="info-value money">{ applyExpenseMask(info.expenses.paid.toString()) }</span>
                      </div>
                    </div>
                    <div className="igc-div">
                      <span>IGC (Atual)</span>
                      <div className="info">
                        <span className="info-label">Contínuo:</span>
                        <span className="info-value">
                          { info.igc_cont_value ? info.igc_cont_value.toString().replace('.', ',') : 'Valor ainda não definido' }
                        </span>
                      </div>
                      <div className="info">
                        <span className="info-label">Discreto:</span>
                        <span className="info-value">
                          { info.igc_value ? info.igc_value : 'Valor ainda não definido' }
                        </span>
                      </div>
                    </div>
                    <div className="igc-div">
                      <span>IGC (Previsto)</span>
                      <div className="info">
                        <span className="info-label">Contínuo:</span>
                        <span className="info-value">
                          { info.predicted_igc.toString().replace('.', ',')}
                        </span>
                      </div>
                      <div className="info">
                        <span className="info-label">Discreto:</span>
                        <span className="info-value">
                          { discreteIGC(info.predicted_igc) }
                        </span>
                      </div>
                    </div>
                  </div>
                </Collapsible>
              )) }
            </div>
          : <Loader /> }
        </div>
      </div>
    </>
  );
}