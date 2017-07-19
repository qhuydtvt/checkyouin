import React, { Component } from 'react';
import Modal from 'react-modal';
import { hideConfirmDialog } from '../actions';

import { connect } from 'react-redux';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class DialogBox extends Component {

  onOK() {
    this.props.dialog.onConfirm();
    this.props.hideConfirmDialog();
  }

  render() {
    return (
      <Modal
        isOpen= {this.props.dialog.isOpen}
        style={customStyles}
        onRequestClose={this.props.hideConfirmDialog}
        contentLabel=''
      >

      <h6>Delete this record?</h6>
      <button className='btn btn-success m-x-1' onClick={this.props.hideConfirmDialog}>No</button>
      <button className='btn btn-danger m-x-1'  onClick={this.onOK.bind(this)}>Yes</button>
      </Modal>
    );
  }
}

function mapStateToProps({ dialog }) {
  return { dialog };
}

export default connect(mapStateToProps, { hideConfirmDialog })(DialogBox);
