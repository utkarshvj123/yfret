import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Cards from "../Cards";
import './style.css';
import PropTypes from "prop-types";

 function ModalView(props) {
  return (
    <Modal show={props.visibility} size="xl">
      <ModalHeader>
        <ModalTitle>Cart Detail</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Cards array={props.dataModal} buttonVisiblity={props.buttonVisiblity} />
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={() => props.modalVisibilityFunc(false)}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalView;


ModalView.defaultProps = {
  modalVisibilityFunc: () => {},
  array: [],
  show: false,
  buttonVisiblity:false
};
ModalView.propTypes = {
  modalVisibilityFunc: PropTypes.func,
  array: PropTypes.array,
  show: PropTypes.bool,
  buttonVisiblity: PropTypes.bool

};



