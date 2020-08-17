import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import BringHisKingdom from "../img/icon/bring-his-kingdom.inline.svg";
import ExaltChrist from "../img/icon/exalt-christ.inline.svg";
import HostHisPresence from "../img/icon/host-his-presence.inline.svg";
import TransformOurWorld from "../img/icon/transform-our-world.inline.svg";
import anime from "animejs/lib/anime.es.js";

const OurMission = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeBg: "",
    };
  }

  mouseEnter(bg) {
    this.setState({
      activeBg: bg,
    });
    anime({
      targets: ".gh-home-icon",
      opacity: 0.5,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(100),
    });
  }

  mouseLeave() {
    this.setState({
      activeBg: "",
    });
    anime({
      targets: ".gh-home-icon",
      opacity: 1,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(100),
    });
  }

  render() {
    const { data } = this.props;
    const { activeBg } = this.state;
    return (
      <section
        className={`gh-our-mission ${
          this.activeBg !== "" ? `gh-our-mission--${activeBg}` : ""
        }`}
      >
        <div className={activeBg === "exalt" ? "exalt active" : "exalt"}>
          <Img fluid={data.headerImage1.childImageSharp.fluid} />
        </div>
        <div className={activeBg === "host" ? "host active" : "exalt"}>
          <Img fluid={data.headerImage2.childImageSharp.fluid} />
        </div>
        <div className={activeBg === "bring" ? "bring active" : "exalt"}>
          <Img fluid={data.headerImage3.childImageSharp.fluid} />
        </div>
        <div
          className={activeBg === "transform" ? "transform active" : "exalt"}
        >
          <Img fluid={data.headerImage4.childImageSharp.fluid} />
        </div>

        <div className="container">
          <h2>
            Our <span>Mission</span>
          </h2>
          <p>
            gracehouse is a Christian Church in Logan. We are a community
            passionate about Jesus. We exist to exalt him, host his presence,
            bring his Kingdom and see lives transformed by his grace.
          </p>
          <div className="gh-home-icons">
            <div
              className="gh-home-icon gh-home-icon--translate-right"
              onMouseEnter={() => this.mouseEnter("exalt")}
              onMouseLeave={() => this.mouseLeave()}
            >
              <ExaltChrist />
              <h2>Exalt Christ</h2>
            </div>
            <div
              className="gh-home-icon"
              onMouseEnter={() => this.mouseEnter("host")}
              onMouseLeave={() => this.mouseLeave()}
            >
              <HostHisPresence />
              <h2>Host His Presence</h2>
            </div>
            <div
              className="gh-home-icon gh-home-icon--translate-left"
              onMouseEnter={() => this.mouseEnter("bring")}
              onMouseLeave={() => this.mouseLeave()}
            >
              <BringHisKingdom />
              <h2>Bring His Kingdom</h2>
            </div>
            <div
              className="gh-home-icon"
              onMouseEnter={() => this.mouseEnter("transform")}
              onMouseLeave={() => this.mouseLeave()}
            >
              <TransformOurWorld />
              <h2>Transform Our World</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        headerImage1: file(relativePath: { eq: "priscilla.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headerImage2: file(relativePath: { eq: "church.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headerImage3: file(relativePath: { eq: "kids.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headerImage4: file(relativePath: { eq: "praying-for-anna.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <OurMission data={data} />}
  />
);
