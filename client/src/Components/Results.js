import React from 'react';
import { Label } from 'react-bootstrap';

const Results = (props) => {
  return (
    <div className='results-container'>
      {props.results.map((result, key) => (
        <Label key={key}>{result}</Label>
      ))}
    </div>
  );
};

export default Results;