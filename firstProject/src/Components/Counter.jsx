import PropTypes from 'prop-types';
import React from 'react'
/**
 * 
 * @returns {count} - return count 
 */
function Counter({ count }) {
    return count;
}

Counter.propType = {
    count: PropTypes.number
}

export default Counter
