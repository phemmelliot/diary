/* eslint-disable valid-jsdoc */
import React, { Component } from 'react';

import PropTypes from 'prop-types';

/**
 * @desc renders Entries page
 // eslint-disable-next-line valid-jsdoc
 * @param {string} postData
 * @param {event} event
 * @param {event} e
 */
class AddEntry extends Component {
  state = {
    title: '',
    text: '',
  }

  closeModal = () => {
    this.props.unmountMe();
  };

  saveEntry = () => {
    const postData = {
      title: this.state.title,
      text: this.state.text
    };
    console.log(postData);
    this.props.addEntry(postData);
    this.props.unmountMe();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div id='addModal' className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='close' id='addClose' onClick={this.closeModal}>
            &times;
          </span>
        </div>
        <div className='modal-body'>
          <p>Title</p>
          <input
            className='title'
            id='addTitle'
            name='title'
            value={this.state.title}
            focus='true'
            onChange={this.handleChange}
            contentEditable />
          <p>Text</p>
          <input
            className='title'
            id='addText'
            name='text'
            value={this.state.text}
            focus='true'
            onChange={this.handleChange}
            contentEditable />
          <p />
        </div>
        <div className='modal-footer'>
          <button type='button' className='edit' id='addSaveBtn' onClick={this.saveEntry}>
            SAVE
          </button>
          <button type='button' className='save' id='closeBtn' onClick={this.closeModal}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
    );
  }
}

AddEntry.propTypes = {
  unmountMe: PropTypes.func.isRequired,
  addEntry: PropTypes.func.isRequired
};

export default AddEntry;
