import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import './style.css';

function RatingComponent({ users }) {
    const _renderUser = ({name, points}, index) => (
        <div className="user-info" key={index}>
            <p className="user-name">
                <span>Name:</span>
                <span>{name}</span>
            </p>
            <p className="user-points">
                <span className="user-points">Points:</span>
                <span>{points}</span>
            </p>
        </div>
    )
    return (
        <Col lg={2} md={2} className="user-result-list">
            <h2>Rating</h2>
            {users.map(_renderUser)}
        </Col>
    )
};

RatingComponent.propTypes = {
    users: PropTypes.array.isRequired,
};

export default RatingComponent;

