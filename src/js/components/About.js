import React from 'react';
import '../../css/styles.css';
import '../../css/about.css';
import proPic from '../../img/pro-pic.jpg';

export const About = (props) => {
  return (
    // Just import bootstrap so I can use rows and bullshit in this
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="text-center">
          <img src = { proPic } alt="Profile" className="section "/>
        </div>
        <hr className="light"></hr>
        <p className="section">
          My name is Ryan Winnicki and I am a student at Columbia University in Chicago. I love to do lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
      </div>

    </div>
  );
};
