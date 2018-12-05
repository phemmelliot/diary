/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class profile extends Component {
  render() {
    return (
      <div className="login-body">
      <header id="myHeader">
        <div className="container">
          <div id="branding">
            <h1><span className="highlight">Personal</span>Diary</h1>
          </div>
          <nav>
            <ul>
              <li className="current">
                <Link to="/entries">Diary Entries</Link>
              </li>
              <li className="current">
                <Link to="/profile">Profile</Link>
              </li>
              <li><Link to="/">
                <button>LOG OUT</button>
              </Link></li>
              </ul>
          </nav>
        </div>
      </header>
      <div className="loginbox" id="form">
        <h1>Your Profile</h1>
        <form action="entries.html">
          <input type="text" name="" value="Email" readOnly id="emailField" />
          <input type="text" name="" value="Username" readOnly id="usernameField" />
          <p>Set Reminder Below</p>
          <select className="dropdown dropbtn">
            <option value="0">No Reminder</option>
            <option value="1">Every 24 hours</option>
            <option value="2">Every 12 hours</option>
            <option value="3">Every 6 hours</option>
            <option value="4">Every 3 hours</option>
          </select>
        </form>
        <input type="submit" name="" value="Update" formAction="entries.html" id="inputUpdate" />
        <button className="editProfile" id="inputEdit">Edit</button>
      </div>
    </div>
    );
  }
}
