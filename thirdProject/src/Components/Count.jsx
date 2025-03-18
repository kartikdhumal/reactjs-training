import PropTypes from 'prop-types'
import '../styles/home.scss'
/**
 * 
 * @param {count} - button on click function 
 * @param {label} - button text
 * @returns {count} - returns current count
 */

function Count({ count }) {
  return <p className="count">{count}</p>;
}


Count.prototype = {
  count: PropTypes.number
}

export default Count
