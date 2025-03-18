import PropTypes from 'prop-types';
import '../styles/main.scss'

/**
 * 
 * @param {handler} - button on click function 
 * @param {label} - button text
 * @returns 
 */

function Count(props) {
  return <p className='count'>{props.count}</p>;
}

Count.propType = {
  count: PropTypes.number
}

export default Count
