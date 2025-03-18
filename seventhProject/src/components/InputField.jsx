import React from "react";
import PropTypes from 'prop-types';

/**
 * @param {label} - label
 * @param {type} - Input type
 * @param {value} - value of input
 * @param {onChange} - onChange Function
 * @returns - input type in form
 */
function InputField({ label, type, value, onChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} value={value} name={label} onChange={onChange} />
    </div>
  );
}

InputField.propType = {
  label: PropTypes.string,
  type: PropTypes.shape,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default InputField;
