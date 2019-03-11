import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

import img1 from '../../img/35mm/IMG_20180105_0002.jpg';
import img2 from '../../img/35mm/IMG_20180105_0003.jpg';
import img3 from '../../img/35mm/IMG_20180105_0008.jpg';
import img4 from '../../img/35mm/IMG_20180105_0011.jpg';
import img5 from '../../img/35mm/IMG_20180112_0012.jpg';
import img6 from '../../img/35mm/IMG_20180112_0014.jpg';

import '../../css/styles.css';
import '../../css/stills.css';

const STILLS = [
  {
    thumbnail: img1,
    src: img1,
    thumbnailHeight: 300,
    thumbnailWidth: 300,
    caption: "lorem lorem lorem lorem"
  },
  {
    thumbnail: img2,
    src: img2,
    thumbnailHeight: 500,
    thumbnailWidth: 500,
    caption: "lorem lorem lorem lorem"
  },
  {
    thumbnail: img3,
    src: img3,
    thumbnailHeight: 500,
    thumbnailWidth: 500,
    caption: "lorem lorem lorem lorem"
  },
  {
    thumbnail: img4,
    src: img4,
    thumbnailHeight: 500,
    thumbnailWidth: 500,
    caption: "lorem lorem lorem lorem"
  },
  {
    thumbnail: img5,
    src: img5,
    thumbnailHeight: 500,
    thumbnailWidth: 500,
    caption: "lorem lorem lorem lorem"
  },
  {
    thumbnail: img6,
    src: img6,
    thumbnailHeight: 500,
    thumbnailWidth: 500,
    caption: "lorem lorem lorem lorem"
  },
]


export default class StillsSection extends Component {

  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = { stills: STILLS, val: 4 };

    this.setImgSize = this.setImgSize.bind(this);

    this.state.stills.map( (image, index) => {
      this.setImgSize(image, index);
    })
  }

  componentDidMount(){
    console.log("component Did Mount");
  }

  setImgSize(image, index) {
    console.log("Set Image");
    var newImg = new Image();

    newImg.onload = (function() {
      console.log("Onload");

      // https://www.robinwieruch.de/react-state-array-add-update-remove/
      this.setState(state => {
        const stills = state.stills.map((still, id) => {
          if (id === index) {
            still.thumbnailHeight = newImg.height;
            still.thumbnailWidth = newImg.width;
          }
        })
      });
    }).bind(this);

    newImg.src = image.src; // this must be done AFTER setting onload
  }

  render() {
    console.log("Render");
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="stills-section">
              <h4 className="text-center"> {this.props.title} </h4>
              <hr className="light"></hr>
            </div>
          </div>
        </div>
        <div className="row image-container">
          <div className = "each-image" >
            <Gallery
                images={ this.state.stills }
                enableImageSelection={false}
            />,
          </div>
        </div>
      </div>
    );
  }


}
