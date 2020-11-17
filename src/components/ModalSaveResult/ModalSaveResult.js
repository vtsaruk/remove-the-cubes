import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';

function ModalSaveResult(props) {
    const {isShowModal, handleSave, handleCancel} = props;
    const _handleSave = (evt) => {
        evt.preventDefault();
        const name = evt.target['userName'].value;
        handleSave({name});
    }
    return (
        <Modal show={isShowModal} 
            className="save-result-modal"
            onHide={() => {}}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Form onSubmit={_handleSave}>
            <Modal.Header>
                <Modal.Title id="example-custom-modal-styling-title">
                    End game
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    className="user-name-input"
                    type="text"
                    name="userName"
                    placeholder="User name"
                    required
                />
                <div className="button-wrapper">
                    <Button variant="primary" type="button" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Save total points
                    </Button>
                </div>
            </Modal.Body>
        </Form>
      </Modal>
    )
}

ModalSaveResult.propTypes = {
    isShowModal: PropTypes.bool.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
}

export default ModalSaveResult;