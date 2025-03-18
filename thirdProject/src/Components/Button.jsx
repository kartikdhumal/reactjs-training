import PropTypes from 'prop-types'
import React from 'react'
import '../styles/home.scss'
/**
 * 
 * @param {handler} - button on click function 
 * @param {label} - button text
 * @returns 
 */
function Button({ label, handler }) {
    return (
        <button className='btn' onClick={handler}>
            {label}
        </button>
    )
}

Button.propType = {
    handler: PropTypes.func,
    label: PropTypes.string
}

export default Button
