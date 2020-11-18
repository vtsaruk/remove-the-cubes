import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

import {getTimeToString} from '../../utils/common';

function Timer({ time }) {
  const _time = getTimeToString(time);
  return (
    <div className="label">
      {_time}
    </div>
  )
}

Timer.propTypes = {
  isGame: PropTypes.bool.isRequired,
  endGame: PropTypes.func.isRequired,
}

export default Timer

