import React from 'react';
import { Label } from 'react-bootstrap';

const Results = (props) => {
  return (
    <div className='results-container'>
      {props.results.map((result, key) => (
        <h3 key={key}>
          <Label 
          className='result'
          bsStyle='success'
        >{result}</Label>
        </h3>
      ))}
    </div>
  );
};

export default Results;