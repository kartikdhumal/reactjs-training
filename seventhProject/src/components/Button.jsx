import React from "react";
import PropTypes from 'prop-types';

/**
 * 
 * @param {text} - button text
 * @param {onClick} - onClick function of button
 * @returns - Button
 */
function Button({ text, onClick }) {
  return (
    <button className="submit-btn" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propType = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
