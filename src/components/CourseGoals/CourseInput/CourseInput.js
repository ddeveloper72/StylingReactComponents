import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// added new const for firmControl using styled-components
const FormControl = styled.div`

`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  // use state to assume the state of the form is valid
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      // if the test for the entered value is true
      setIsValid(true);
    }

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
      {/* use dynamically added classes instead of high priority inline style */}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
