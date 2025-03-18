import React from 'react'
import PropTypes from 'prop-types';
import '../styles/home.scss'
/**
 * 
 * @param {label} - button text 
 * @param {handler} - button onclick function
 * @returns 
 */
function Button(props) {
    return (
        <button className='btn' onClick={props.handler}>
            {props.label}
        </button>
    )
}

Button.propType = {
    label: PropTypes.string,
    handler: PropTypes.func
}
export default Button
