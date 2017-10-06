import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import '../css/general.css';


class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                  data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="/">
                <img id='prison' src={require('../img/logo.png')} alt='we build prisons'/>
              </a>
            </div>
            <p></p>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <span className="nav navbar-right">
                <Link className='link' to='/blog'>Blog</Link>
                <span>.....</span>
                <Link className='link' to='/sound'>Sound</Link>
                <span>.....</span>
                <Link className='link' to='/paintings'>Paintings</Link>
              </span>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
