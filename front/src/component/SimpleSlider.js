import React from "react";
import Slider from "react-slick";



class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div></div>
    );
  }
}

export default SimpleSlider;