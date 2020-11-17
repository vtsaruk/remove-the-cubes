import React from 'react';
import PropTypes from 'prop-types';
import {MAX_TOTAL_BLOCKS} from '../../constants';
import './style.css';

const cellslist = Array(MAX_TOTAL_BLOCKS).fill(null).map((item, index) => index);

function DisplayGame({activeBlocks = [], createScore, cash = {}}) {
  const handleClick = (targetIndex) => {
    if (activeBlocks.includes(targetIndex)) {
      createScore(targetIndex);
    }
  }
  const renderCell = (item) => {
    const targetIndex = item + 1;
    const isActive = activeBlocks.includes(targetIndex);

    if (!isActive) {
      return <div key={item} className="cell" />
    }

    const _handleClick = () => handleClick(targetIndex);
    return (
      <div
        key={item}
        className="cell active"
        style={{background: cash[targetIndex].color}}
        onClick={_handleClick}
      />
    )
  };

  return (
    <div className="display-game">
      {cellslist.map(renderCell)}
    </div>
  )
}

DisplayGame.propTypes = {
  activeBlocks: PropTypes.array.isRequired,
  createScore: PropTypes.func.isRequired,
  cash: PropTypes.object.isRequired,
}

export default DisplayGame;

