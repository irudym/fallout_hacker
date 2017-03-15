import React, { PropTypes } from 'react';

const buttonStyle = {
  'height': '2rem',
  'width': '2rem',
  'marginRight': '1rem',
};

const DeleteButton = ({ onClick }) => (
  <button style={buttonStyle} onClick={onClick}> - </button>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
