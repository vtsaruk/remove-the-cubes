import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

import {STEP_FOR_GAME} from '../../constants';
import {getTimeToString} from '../../utils/common';

function Timer({isGame, endGame, time, changeTime}) {
  useEffect(() => {
    if (time > 0 && isGame) {
      setTimeout(changeTime, STEP_FOR_GAME);
    }
    
    if (isGame && !time) {
      endGame();
    }
  }, [time, isGame]);

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

