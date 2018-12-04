import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line require-jsdoc
export default function header() {
  return (
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
          <Link href='/'>
            <button>LOG OUT</button>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}
