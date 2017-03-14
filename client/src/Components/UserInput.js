import React from 'react';
import { FormControl, Checkbox } from 'react-bootstrap';
import UserButton from './UserButton';

const UserInput = props => {
  const buttonRows = [['1','2','3'], ['4','5','6'], ['7','8','9']];

  return (
    <div>
      <form className='user-display-container'>
        <FormControl
          className='user-display'
          type="text"
          value={props.userNumber}
          bsSize='lg'
          disabled
          >
        </FormControl>
      </form>
      {buttonRows.map((buttonRow, i) => (
        <div className='button-row' key={i}>
          {buttonRow.map((button) => (
              <UserButton
                key={button}
                value={button}
                clickHandler={props.onUserInput}
                type='primary'
                disabled={button === '1' ? true : false}
              >{button}</UserButton>
          ))}
        </div>
      ))}
      <div className='button-row'>
        <UserButton 
          value='Clear'
          clickHandler={props.onClearUserInput}
          type='danger'
          disabled={false}
        >Clear</UserButton>
      </div>
      <div>
        <h3 className='checkbox-container'>
          <Checkbox onChange={props.onEnglishToggle} value={props.english} inline></Checkbox> &nbsp; Filter for English words?
        </h3>
      </div>
      
      
    </div>
  );
};

export default UserInput;