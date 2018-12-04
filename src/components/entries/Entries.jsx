/* eslint-disable valid-jsdoc */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

// third-party library
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
// action
import {
  getAllEntries, updateEntry, createEntry, deleteEntry
} from '../../action/entries';

// helper function
import Validation from '../../helpers/UserValidation';

// components
import AddModal from './AddEntry';

/**
 * @desc renders Entries page
 * @param {string} postData
 * @param {event} event
 * @param {event} e
 */
class Entries extends Component {
  state = {
    loading: false,
    entries: [],
    addFabClicked: false,
    entryModalClicked: false,
    emptyEntry: false,
    error: false,
  }

  componentDidMount() {
    // eslint-disable-next-line no-restricted-globals
    this.setState({ loading: true });
    this.props.getAllEntries().then((response) => {
      this.setState({ loading: false });
      if (response.payload.status === 404) {
        this.setState({
          emptyEntry: true,
          error: false
        });
      } else if (response.payload.status === 401) {
        console.log('It should be in login page now');
        window.location = '/login';
      } else if (response.payload.status === 200) {
        this.setState({
          entries: response.payload.data.data.entries,
          emptyEntry: false,
          error: false
        });
      }
      console.log(response);
    });
  }

  handleTextChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  clickFab = () => {
    this.setState({ addFabClicked: true });
  }

  handleChildUnmount = () => {
    this.setState({ addFabClicked: false });
  }

  createPost = (postData) => {
    this.props.createEntry(postData).then((response) => {
      console.log(response);
      if (response.payload.status === 201) {
        this.setState({
          entries: response.payload.data.data.entries,
          emptyEntry: false,
          error: false
        });
      }
    });
  }

  postEntry = (postData) => {
    const { title, text } = postData;
    // this.createPost(postData);
    console.log(postData);
    if (!Validation.isDefined(title)) {
      swal('Failed', 'Input a title before saving', 'error');
    } else if (!Validation.isDefined(text)) {
      swal('Failed', 'Input a description before saving', 'error');
    } else {
      this.createPost(postData);
    }
  }

  render() {
    return (
      <div id='entriesBody'>
        <header id='myHeader'>
        <div className='container'>
    <div id='branding'>
      <h1>
        <span className='highlight'>Personal</span>Diary
      </h1>
    </div>
    <nav>
      <ul>
        <li className='current'>
          <Link to='/entries'>Diary Entries</Link>
        </li>
        <li className='current'>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/'>
            <button>LOG OUT</button>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
        </header>
        {this.state.error
          ? <div className='errorHeader' id='errorHead'>
                <p>{this.state.errorMessage}</p>
             </div>
          : ''}
        <div className='loaderNone' id='gradientBg' />
        { this.state.emptyEntry
          ? <div className='errorImage' id='emptyDiary'>
              <p className='noEntry'>Diary is empty click on the + button below to add new page</p>
           </div>
          : <div className='wrapper'>
           {this.state.entries.map((entry, index) => (
               <div className="inner-box" id={index} key={index}>
                <h1 id={index}>{entry.title}</h1>
                  <p id={index}>{entry.description}</p>
                  <p className="errorHeaderNone" id={index}>${index}</p>
               </div>
           ))}
           </div> }
           {this.state.addFabClicked
             ? <AddModal unmountMe={this.handleChildUnmount} addEntry={this.postEntry}/>
             : null}
        <div className='fab' id='addFab' onClick={this.clickFab}>
          <span className='fab-action-button'>
            <i className='fab-action-button__icon' />
          </span>
        </div>
        {this.state.loading
          ? <div className="loading">
               <Loader color="#0FC86F" speed={1} className="spinner" />
            </div>
          : ''}
      </div>
    );
  }
}

Entries.propTypes = {
  getAllEntries: PropTypes.func.isRequired,
  updateEntry: PropTypes.func.isRequired,
  createEntry: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired,
  allEntriesResponse: PropTypes.object,
  updateEntryResponse: PropTypes.object,
  createEntryResponse: PropTypes.object,
  deleteEntryResponse: PropTypes.object,
};

const mapStateToProps = state => ({
  allEntriesResponse: state.entries.allEntriesResponse,
  updateEntryResponse: state.entries.updateEntryResponse,
  createEntryResponse: state.entries.createEntryResponse,
  deleteEntryResponse: state.entries.deleteEntryResponse,
});

export default connect(
  mapStateToProps,
  {
    getAllEntries, updateEntry, createEntry, deleteEntry
  }
)(Entries);
