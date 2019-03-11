import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../css/header.css';
import '../../css/styles.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h3>
          <Link to={"/"}>
            RPWCinematography
          </Link>
        </h3>
        <ul className="navBar">
          <li> <Link to={"/stills"} activeClassName={"active"}> Stills</Link> </li>
          <li> <Link to={"/clips"} activeClassName={"active"}> Clips</Link> </li>
          <li> <Link to={"/about"} activeClassName={"active"}> About</Link> </li>
          <li> <Link to={"/contact"} activeClassName={"active"}> Contact</Link> </li>
        </ul>
      </header>
    );
  }
}

export default Header;
