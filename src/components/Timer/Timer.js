import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {STEP_FOR_GAME} from '../../constants';
import {getTimeToString} from '../../utils/common';

function Timer({isGame, endGame, time, changeTime}) {
  const [intervalProcess, setIntervalProcess] = useState(null);
  useEffect(() => {
    if (isGame && !intervalProcess) {
      setIntervalProcess(setInterval(changeTime, STEP_FOR_GAME));
    }

    if (!isGame && intervalProcess) {
      clearInterval(intervalProcess)
    }

    return  clearInterval(intervalProcess)
  }, [isGame]);

  useEffect(()=>{
    if (isGame && time === 0) {
      endGame();
    }
  }, [time, isGame])

  const _time=getTimeToString(time);
  return (
    <div>
      {_time}
    </div>
  )
}

Timer.propTypes = {
  isGame: PropTypes.bool.isRequired,
  endGame: PropTypes.func.isRequired,
}

export default Timer

