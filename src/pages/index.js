import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import anime from "animejs/lib/anime.es.js";
import OurMission from "../components/our-mission";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import WhatsOnItem from "../components/whats-on-item";
import NowPlaying from "../components/now-playing";
import moment from "moment";

class RootIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  componentDidMount() {
    anime({
      targets: ".gh-header h1 span",
      opacity: 1,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      duration: 3000,
      top: 0,
      delay: anime.stagger(100, { start: 1000 }),
    });
  }

  onHeadingHover() {
    anime({
      targets: ".gh-header h1 span",
      opacity: 0.5,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(100),
    });
  }

  onHeadingLeave() {
    anime({
      targets: ".gh-header h1 span",
      opacity: 1,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(100),
    });
  }

  render() {
    const { data } = this.props;

    return (
      <Layout>
        <Helmet>
          <meta
            property="og:image"
            content={data.headerImage1.childImageSharp.fluid.src}
          />
        </Helmet>
        <section className="gh-header">
          <div className="images">
            <Img
              fluid={data.headerImage3.childImageSharp.fluid}
              alt="Church in Logan"
            />
            <Img
              fluid={data.headerImage2.childImageSharp.fluid}
              alt="Church in Logan"
            />
            <Img
              fluid={data.headerImage1.childImageSharp.fluid}
              alt="Church in Logan"
            />
          </div>
          <h1
            onMouseEnter={() => this.onHeadingHover()}
            onMouseLeave={() => this.onHeadingLeave()}
          >
            <span className="alt">Jesus</span> <span>is</span>{" "}
            <span>Life.</span>
          </h1>
          <NowPlaying
            times={[
              {
                name: "Sunday Service",
                url: "https://youtu.be/9vXe3Q_M1sE",
                startTime: {
                  dayOfWeek: 7,
                  hours: 10,
                  minutes: 0,
                },
                endTime: {
                  dayOfWeek: 7,
                  hours: 12,
                  minutes: 0,
                },
              },
            ]}
          />
          <NowPlaying
            times={[
              {
                name: "Prayer Meeting",
                url: "https://zoom.us/j/898014747",
                startTime: {
                  dayOfWeek: 3,
                  hours: 6,
                  minutes: 30,
                },
                endTime: {
                  dayOfWeek: 3,
                  hours: 7,
                  minutes: 30,
                },
              },
            ]}
          />
        </section>
        <section className="gh-home-disclaimer">
          <div className="container">
            <h2>Pre-Register for 10am Sunday Service</h2>
          </div>
          <div className="container-sm">
            <p>
              Due to COVID Safe requirements, we ask that you would pre-register
              your attendance at our Sunday Service. Thank you for your
              understanding, we would love for you to join us.
            </p>
            <p>
              <a
                className="whats-on-button whats-on-button--active"
                href="https://www.eventbrite.com.au/e/10am-sunday-service-gracehouse-tickets-112444887686?fbclid=IwAR3ERCTkZnck57sJxQFN7l-DWnFRnfQr9mEv8vfyc7FF2fycSXzvY36WTOc"
              >
                Get Tickets
              </a>
            </p>
          </div>
        </section>
        <section className="gh-top-links">
          <OutboundLink
            target="_blank"
            href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ"
          >
            <span>Sermons</span>
          </OutboundLink>
          <AniLink fade to="/contact">
            <span>Contact Us</span>
          </AniLink>
        </section>
        <OurMission />
        <section className="gh-whats-on">
          <div className="divider"></div>
          <div className="container">
            <h2>
              What's <span>On</span>
            </h2>
            <div className="event-container">
              <div className="event-container-left">
                <WhatsOnItem
                  compact={true}
                  title="Sunday Service"
                  url="https://youtu.be/9vXe3Q_M1sE"
                  extraTitle={"Church"}
                  isYouTube={true}
                  extraText={"Sun 10:00am"}
                  times={[
                    {
                      startTime: {
                        dayOfWeek: 7,
                        hours: 10,
                        minutes: 0,
                      },
                      endTime: {
                        dayOfWeek: 7,
                        hours: 12,
                        minutes: 0,
                      },
                    },
                  ]}
                />
                <div className="event-item">
                  <h3>Midweek Gatherings</h3>
                  <p>Wed 7:30pm - 9:30pm</p>
                </div>
                <div className="event-item">
                  <h3>Prayer Room</h3>
                  <p>Coming Back Soon...</p>
                </div>
              </div>
              <div className="event-container-right">
                <WhatsOnItem
                  title="Prayer Meetings"
                  url="https://zoom.us/j/898014747"
                  compact={true}
                  rtl={true}
                  extraTitle={"Church"}
                  extraText={"Mon & Fri 6:30am - 7:30am"}
                  times={[
                    {
                      startTime: {
                        dayOfWeek: 3,
                        hours: 6,
                        minutes: 30,
                      },
                      endTime: {
                        dayOfWeek: 3,
                        hours: 7,
                        minutes: 30,
                      },
                    },
                  ]}
                />
                <p></p>
                <div className="event-item event-item--rl">
                  <h3>Inter-Church Prayer</h3>
                  <p>Fortnightly Fri - 7:30pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
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
  }
`;
