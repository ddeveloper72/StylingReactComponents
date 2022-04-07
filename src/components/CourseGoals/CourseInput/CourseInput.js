import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  // use state to assume the state of the form is valid
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // Check if whitespace or nothing has been entered
    if (enteredValue.trim().length === 0) {
      // if the test for the entered value is true
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* use the truthiness of state for inline-styling */}
        <label style={{
          color: !isValid ? 'red' : 'black'
        }}>Course Goal</label>
        <input style={{
          border: !isValid ? '1px solid red' : '1px solid #000',
          background: !isValid ? '#e4bcb7' : 'transparent'
        }} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
