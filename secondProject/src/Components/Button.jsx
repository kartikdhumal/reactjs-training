import React from 'react'
import PropTypes from 'prop-types';
import '../styles/main.scss'
/**
 * 
 * @param {handler} - button on click function 
 * @param {label} - button text
 * @returns 
 */
function Button(props) {
    const { handler = () => { }, label = " " } = props;
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
