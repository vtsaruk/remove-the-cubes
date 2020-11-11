import React from 'react';
import PropTypes from 'prop-types';

function InfoDisplay({title}) {
  return (
    <div className="info-displlay">
      {title}
    </div>
  )
}

InfoDisplay.propTypes = {
  title: PropTypes.string.isRequired,
}

export default InfoDisplay

