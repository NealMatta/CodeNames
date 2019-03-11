import React, { Component } from 'react';

import Header from './Header';
import { Footer } from './Footer'; // Footer and About are stateless componenets

class Root extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          {this.props.children}
        </div>
        
        <Footer />
      </div>


    );
  }
}

export default Root;
