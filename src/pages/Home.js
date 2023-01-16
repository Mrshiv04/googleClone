import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../Search';

function Home() {
  return (
    <div>
      <div className='home_header'>
        <div className='home_headerleft'>
          <Link to='about'>About</Link>
          <Link to='store'>Store</Link>
        </div>
        <div className='home_headerRight'>
          <Link to='gmail'>Gmail</Link>
          <Link to='images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className='home_body'>
        <img
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
          alt='logo'
        />
        <div className='home_inputContainer'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
