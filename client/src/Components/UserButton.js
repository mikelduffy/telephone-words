import React from 'react';
import { Button } from 'react-bootstrap';

const UserButton = props => (
  <Button
    className='user-button'
    onClick={props.clickHandler}
    value={props.value}
    bsStyle={props.type}
    bsSize="large" 
    disabled={props.disabled}
    >{props.value}</Button>
);

export default UserButton;