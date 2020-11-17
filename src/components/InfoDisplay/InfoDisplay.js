import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function InfoDisplay({title}) {
  return (
    <div className="info-displlay label">
      {title}
    </div>
  )
}

InfoDisplay.propTypes = {
  title: PropTypes.number.isRequired,
}

export default InfoDisplay

