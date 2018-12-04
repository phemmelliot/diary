/* eslint-disable valid-jsdoc */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

// third-party library
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { Link } from 'react-router-dom';

// action
import loginUser from '../../action/login';

// helper function
import Validation from '../../helpers/UserValidation';

/**
 * @desc renders Login page
 * @param {string} postData
 * @param {event} event
 * @param {event} e
 */
class Login extends Component {
  state = {
    email: '',
    password: '',
    username: '',
    loading: false,
    error: false,
    errorMessage: ''
  }

  handleLogin = (postData) => {
    this.setState({ loading: true });
    this.props.loginUser(postData).then((response) => {
      this.setState({ loading: false });
      if (response.payload.status === 200) {
        localStorage.setItem('token', response.payload.data.token);
        localStorage.setItem('user_id', response.payload.data.user_id);
        this.props.history.push('/entries');
      } else if (response.status === 400) {
        this.setState({
          errorMessage: 'Invalid Email or Password',
          error: true
        });
      } else if (response.status === 500) {
        this.setState({
          errorMessage: 'An error occurred, please try again',
          error: true
        });
      } else if (response.status === 409) {
        this.setState({
          errorMessage: 'User already exist',
          error: true
        });
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const postData = {
      email,
      password
    };
    if (!Validation.isDefined(this.state.email)) {
      this.setState({
        errorMessage: 'Input email to proceed',
        error: true
      });
    } else if (!Validation.isValid(this.state.email)) {
      this.setState({
        errorMessage: 'Email is invalid',
        error: true
      });
    } else if (!Validation.isDefined(this.state.password)) {
      this.setState({
        errorMessage: 'Input password to proceed',
        error: true
      });
    } else if (!Validation.checkPassword(this.state.password)) {
      this.setState({
        errorMessage: 'Password is invalid',
        error: true
      });
    } else {
      this.handleLogin(postData);
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
        <div className='login-body'>
          <header id='myHeader'>
          <div className="container">
        <div id="branding">
          <h1><span className="highlight">Personal</span>Diary</h1>
        </div>
        <nav>
          <ul>
            <li className="current"><Link to="/">Home</Link></li>
            <li><Link to="/login"><button>LOG IN</button></Link></li>
            <li><Link to="/signup"><button>SIGN UP</button></Link></li>
          </ul>
        </nav>
      </div>
          </header>
          {this.state.error
            ? <div className='errorHeader' id='errorHead'>
                <p>{this.state.errorMessage}</p>
             </div>
            : ''}
          <div className='loginbox' id='logBox'>
            <h1>Login Here</h1>
            <form id='loginUsers'
             onSubmit={this.handleSubmit}>
              <p>Email</p>
              <input
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                placeholder='Enter Email'
                id='email'
              />
              <p>Password</p>
              <input
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Enter Password"
                id='password'
                autoComplete="new-password"
              />
              <input type='submit' name='' value='Login' />
              <Link to='./signup'>Create an account</Link>
            </form>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  userResponse: PropTypes.object,
  isAuth: PropTypes.bool,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  isAuth: state.login.isAuth,
  userResponse: state.login.userResponse
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
