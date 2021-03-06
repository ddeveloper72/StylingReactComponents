import React from 'react';

import Styles from './Button.module.css';
// import styled from 'styled-components';

// add css style direct to the button component method
// const Button = styled.button`

//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

// @media (min-width: 768px) {
//   width: auto;
// }

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `;

// use css module to import Style to render unique style classes
const Button = props => {
  return (
    <button type={props.type} className={Styles.button} onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;
