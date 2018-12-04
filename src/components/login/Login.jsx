/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

/**
 * @desc renders Login page
 */
class Login extends Component {
  render() {
    return (
      <div>
        <body className='login-body'>
          <header id='myHeader'>
            <div className='container'>
              <div id='branding'>
                <h1>
                  <span className='highlight'>Personal</span>Diary
                </h1>
              </div>
              <nav>
                <ul>
                  <li className='home'>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='#'>
                      <button className='current-page'>LOG IN</button>
                    </a>
                  </li>
                  <li>
                    <a href='/signup'>
                      <button>SIGN UP</button>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div className='errorHeaderNone' id='errorHead' />
          <div className='loaderNone' id='loadDiv' />
          <div className='loginbox' id='logBox'>
            <h1>Login Here</h1>
            <form id='loginUsers'>
              <p>Email</p>
              <input
                type='text'
                name=''
                placeholder='Enter Username'
                id='email'
              />
              <p>Password</p>
              <input
                type='password'
                name=''
                id='password'
              />
              <input type='submit' name='' value='Login' />
              <a href='./signup'>Create an account</a>
            </form>
          </div>
          <script type='text/javascript' src='./js/login.js' />
        </body>
      </div>
    );
  }
}

export default Login;
