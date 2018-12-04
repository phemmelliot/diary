import React, { Component } from 'react';

// eslint-disable-next-line require-jsdoc
class EditModal extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div id='myModal' className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='close'>&times;</span>
        </div>
        <div className='modal-body'>
          <p className='title' id='editTitle' />
          <p className='text' id='editText' />
        </div>
        <div className='modal-footer'>
          <button type='button' className='edit' id='editBtn'>
            EDIT
          </button>
          <button type='button' className='save' id='saveBtn'>
            DELETE
          </button>
        </div>
      </div>
    </div>
    );
  }
}

export default EditModal;
