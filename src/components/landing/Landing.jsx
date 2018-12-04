/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// components

/**
 * @desc renders Landing page
 */
class Landing extends Component {
  render() {
    return (
      <div>
        <body>
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

          <section id='showcase'>
            <div className='showcase-container'>
              <h1>Your Online Diary at Your FingerTip</h1>
              <p>
                Write anywhere, anyhow, anytime, all your thoughts in one place
              </p>
            </div>
          </section>

          <section id='reminder'>
            <div className='reminder-wrapper'>
              <div className='box1'>
                <div className='center-element'>
                  <h1>Be reminded to put down your thoughts</h1>
                  <p>
                    Do you know that a lot of important things goes through our
                    mind every moment? Do you also know that most of this is not
                    documented?. we know it can be hard to always do remember to
                    document it, that is where we come in to remind you
                    intermittently to do just that.
                  </p>
                </div>
              </div>
              <img src='/images/alarm-2.png' alt='' className='grid-image' />
            </div>
          </section>
          <section id='anywhere'>
            <div className='anywhere-container'>
              <h1>Access and modify your written thoughts</h1>
              <p>
                Anywhere, anytime, on any device as long as your are online and
                you can browse the internet
              </p>
            </div>
          </section>
          <script type='text/javascript' src='./js/index.js' />
        </body>
      </div>
    );
  }
}

export default Landing;
