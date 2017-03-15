import React from 'react';


const buttonStyle = {
  'width': '6rem',
  'marginLeft': '5px',
};

const RestartButton = ({ onClick }) => (
  <button onClick={onClick} style={buttonStyle}>Restart</button>
);


export default RestartButton;
