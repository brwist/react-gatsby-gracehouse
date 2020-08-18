import React, { Component } from "react";
import Slider from "react-id-swiper";
import Img from "gatsby-image";
import PlaySermon from "../img/icon/play.inline.svg";
import { Link } from "gatsby";
export class SermonsSlider extends Component {
  state = {
    slickSlider: null,
    activeIndex: 0,
  };

  render() {
    const handleSlide = (index) => {
      this.state.slickSlider.slickGoTo(index);
    };
    const { data } = this.props;
    const settings = {
      speed: 500,
      spaceBetween: 20,
      slidesPerView: 1.2,
      slidesToScroll: 1,
      arrows: false,
      loop: true,
      afterChange: (e) => {
        this.setState({
          activeIndex: e,
        });
      },
      breakpoints: {
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 3.25,
          spaceBetween: 50,
        },
        "@2.00": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    };
    console.log(data);
    return (
      <div className="sermons-slider">
        <Slider
          {...settings}
          ref={(e) => {
            if (e && !this.state.slickSlider)
              this.setState({
                slickSlider: e,
              });
          }}
        >
          {data?.map((item, index) => {
            const { title, reference, imageThumbnail, slug } = item;

            return (
              <div className="slide">
                <Link to={`/sermons/${slug}`}>
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url(${imageThumbnail.fluid.src})`,
                    }}
                  >
                    <div className="content">
                      <h2>{title}</h2>
                      <p>{reference}</p>
                      <button>
                        <PlaySermon /> <span> Play Sermon</span>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SermonsSlider;
