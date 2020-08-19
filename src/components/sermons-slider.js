import React, { Component } from "react";
import Slider from "react-id-swiper";
import Img from "gatsby-image";
import PlaySermon from "../img/icon/play.inline.svg";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ArrowRight from "../img/icon/arrow-right.inline.svg";
export class SermonsSlider extends Component {
  state = {
    swiper: null,
    activeIndex: 0,
  };

  render() {
    const handleSlideNext = () => {
      this.state.swiper.slideNext();
    };
    const { data, isSermon, isSermons } = this.props;
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
      <div
        className={`${
          isSermons ? "sermon-slider sermons-slider" : "sermon-slider"
        } `}
      >
        <Slider
          {...settings}
          ref={(e) => {
            if (e && !this.state.swiper)
              this.setState({
                swiper: e.swiper,
              });
          }}
        >
          {data?.map((item, index) => {
            const {
              title,
              reference,

              slug,
              highlightedTitle,
              videoUrl,
            } = item;
            const videoId = videoUrl?.split("/");
            const imageThumbnail = `https://img.youtube.com/vi/${
              videoId[videoId.length - 1]
            }/hqdefault.jpg`;
            return (
              <div
                key={`/sermons/${slug}`}
                className={`${
                  !isSermons
                    ? "sermon-slider-slide sermons-slider-slide"
                    : "sermon-slider-slide"
                } `}
              >
                <AniLink fade to={`/sermons/${slug}`}>
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url(${imageThumbnail})`,
                    }}
                  >
                    <div className="content">
                      <h2>
                        {title} {highlightedTitle}
                      </h2>
                      <p>{reference}</p>
                      <button>
                        <PlaySermon /> <span> Play Sermon</span>
                      </button>
                    </div>
                  </div>
                </AniLink>
              </div>
            );
          })}
        </Slider>
        <span onClick={() => handleSlideNext()} className="arrow-right">
          <ArrowRight />
        </span>
      </div>
    );
  }
}

export default SermonsSlider;
