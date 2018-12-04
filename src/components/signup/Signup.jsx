import React, { Component } from 'react';

/**
 * @desc renders Signup page
 */
class Signup extends Component {
  // eslint-disable-next-line class-methods-use-this
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
                    <a href='./login'>
                      <button>LOG IN</button>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <button className='current-page'>SIGN UP</button>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div className='errorHeaderNone' id='errorHead' />
          <div className='loaderNone' id='loadDiv' />
          <div className='loginbox' id='signup'>
            <h1>SignUp Here</h1>
            <form id='signUpUsers'>
              <p>Username</p>
              <input
                type='text'
                name=''
                placeholder='Enter Username'
                id='username'
              />
              <p>Email</p>
              <input type='text' name='' placeholder='Enter Email' id='email' />
              <p>Password</p>
              <input
                type='password'
                name=''
                id='password'
              />
              <input type='submit' name='' value='Sign Up' />
              <a href='/login'>Already have an account?</a>
            </form>
          </div>
          <script type='text/javascript' src='./js/signup.js' />
        </body>
      </div>
    );
  }
}

export default Signup;
