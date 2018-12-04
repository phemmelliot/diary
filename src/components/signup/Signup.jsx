/* eslint-disable valid-jsdoc */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

// third-party library
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { Link } from 'react-router-dom';

// action
import signupUser from '../../action/signup';

// helper function
import Validation from '../../helpers/UserValidation';

/**
 * @desc renders Signup page
 */
class Signup extends Component {
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
    this.props.signupUser(postData).then((response) => {
      this.setState({ loading: false });
      if (response.payload.status === 201) {
        localStorage.setItem('token', response.payload.data.token);
        localStorage.setItem('user_id', response.payload.data.user_id);
        this.props.history.push('/login');
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
      } else if (response.status === 401) {
        this.setState({
          errorMessage: 'User does not exist',
          error: true
        });
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, username } = this.state;
    const postData = {
      email,
      password,
      username
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
    } else if (!Validation.isDefined(this.state.username)) {
      this.setState({
        errorMessage: 'Input username to proceed',
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

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
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
          <div className='errorHeaderNone' id='errorHead' />
          {this.state.error
            ? <div className='errorHeader' id='errorHead'>
                <p>{this.state.errorMessage}</p>
             </div>
            : ''}
          <div className='loaderNone' id='loadDiv' />
          <div className='loginbox' id='signup'>
            <h1>SignUp Here</h1>
            <form id='signUpUsers'
               onSubmit={this.handleSubmit}>
              <p>Username</p>
              <input
                type='text'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
                placeholder='Enter Username'
                id='username'
              />
              <p>Email</p>
              <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Enter Email'
              id='email' />
              <p>Password</p>
              <input
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
                name='password'
                placeholder="Enter Password"
                autoComplete="new-complete"
                id='password'
              />
              <input type='submit' name='' value='Sign Up' />
              <a href='/login'>Already have an account?</a>
            </form>
          </div>
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

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  userResponse: PropTypes.object,
  isAuth: PropTypes.bool,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  isAuth: state.signup.isAuth,
  userResponse: state.signup.userResponse
});

export default connect(
  mapStateToProps,
  { signupUser }
)(Signup);
