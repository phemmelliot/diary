import React from 'react';

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
          <a href='#'>Diary Entries</a>
        </li>
        <li className='current'>
          <a href='/profile'>Profile</a>
        </li>
        <li>
          <a href='/index'>
            <button>LOG OUT</button>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  );
}
