import React, { Component } from 'react';

/**
 * @desc renders Entries page
 * @param {string} postData
 * @param {event} event
 * @param {event} e
 */
export default class Entries extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <body id='entriesBody'>
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
                  <a href='#'>Diary Entries</a>
                </li>
                <li className='current'>
                  <a href='profile.html'>Profile</a>
                </li>
                <li>
                  <a href='index.html'>
                    <button>LOG OUT</button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className='loaderNone' id='gradientBg' />
        <div className='loaderNone' id='emptyDiary'>
          Diary is empty click on the + button below to add new page
        </div>
        <div className='errorHeaderNone' id='errorHead' />
        <div className='loaderNone' id='loadDiv' />
        <div className='errorImageNone' id='errImage' />
        <div className='wrapper' id='myWrapper' />
        <div className='fab' id='addFab'>
          <span className='fab-action-button'>
            <i className='fab-action-button__icon' />
          </span>
        </div>

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
        <div id='addModal' className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <span className='close' id='addClose'>
                &times;
              </span>
            </div>
            <div className='modal-body'>
              <p>Title</p>
              <p
                className='title'
                id='addTitle'
                contentEditable
                data-text='Here goes the page title'
              />
              <p>Text</p>
              <p
                className='text'
                id='addText'
                contentEditable
                data-text='And here you can pour down your thoughts'
              />
              <p />
            </div>
            <div className='modal-footer'>
              <button type='button' className='edit' id='addSaveBtn'>
                SAVE
              </button>
              <button type='button' className='save' id='closeBtn'>
                CLOSE
              </button>
            </div>
          </div>
        </div>
        <script type='text/javascript' src='./js/entries.js' />
      </body>
    );
  }
}
