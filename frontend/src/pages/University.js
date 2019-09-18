import React, { useEffect, useState } from 'react';

import api from '../services/api';

export default function University ({ match }) {
  const [university, setUniversity] = useState();

  useEffect(() => {
    async function loadUniversity() {
      const response = await api.get(`/orgs/${match.params.id}`);

      let universityInfo = [];
      Object.keys(response.data).map( (keyName, value) => {
        // console.log(typeof(response.data[keyName]));
        if (typeof(response.data[keyName]) === 'object')
	        universityInfo.push(response.data[keyName][0]._id);
	      else
	      	universityInfo.push(response.data[keyName]);
        // 	expenses = response.data[keyName];
      });

      // pops para retirar timestamps e __v do array
      universityInfo.pop();
      universityInfo.pop();
      universityInfo.pop();
      console.log(universityInfo);

      setUniversity(universityInfo.map(elementInfo => {
        return (
          <h1>{elementInfo}</h1>
        );
      }));
    }

    loadUniversity();    
  }, [match.params.id]);

  return (
    <div>
      {university}
    </div>
  );
}