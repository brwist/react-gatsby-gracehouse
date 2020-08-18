import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import Youtube from "../img/icon/youtube.inline.svg";
import Spotify from "../img/icon/spotify.inline.svg";
import ApplePodCasts from "../img/icon/apple-podcasts.inline.svg";
import PlaySermon from "../img/icon/play.inline.svg";
import SermonsSlider from "../components/Sermons-Slider";
import OurCommitment from "../components/our-commitment";
import FindUsOn from "../components/find-us-on";
import BackgroundImage from "gatsby-background-image";
export default class Sermons extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { data } = this.props;
    const sermons = data?.allContentfulSermon?.nodes;
    const featured = sermons?.find(({ featured }) => !!featured);
    const titlePart1 = featured?.title

      ?.split(" ")
      ?.slice(0, 3)
      .join(" ");
    const titlePart2 = featured?.title
      ?.split(" ")
      ?.slice(3)
      .join(" ");
    return (
      <Layout>
        <Helmet>
          <title>Sermons - Gracehouse Church Logan</title>
          <meta
            property="og:title"
            content="Sermons - Gracehouse Church Logan"
          />
          <meta name="description" content="Holiness is a love affair" />
          <meta property="og:description" content="Holiness is a love affair" />
          <meta
            property="og:image"
            // content={data.headerImage2.childImageSharp.fluid.src}
          />
        </Helmet>
        <section className="sermons-header">
          <div className="container sermons-hero">
            <div className="sermons-hero-social">
              <ul>
                <li>
                  <Youtube />
                  <span>Youtube</span>
                </li>
                <li>
                  <Spotify />
                  <span>Spotify</span>
                </li>
                <li>
                  <ApplePodCasts />
                  <span>Apple podcasts</span>
                </li>
              </ul>
            </div>
            <div className="sermons-hero-title">
              <h1>
                Our <span>Sermons</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="sermons-middle-hero">
          <div className="hero-background-wrapper">
            <BackgroundImage
              Tag="section"
              fluid={featured?.imageThumbnail.fluid}
              className="hero-background"
              style={{
                backgroundPositionY: "top",
              }}
            >
              <div className="sermon-title">
                <h2>
                  {titlePart1}
                  <span className="title-orange">{titlePart2}</span>
                </h2>
                <p>{featured.reference}</p>
                <button>
                  <PlaySermon /> <span> Play Sermon</span>
                </button>
              </div>
            </BackgroundImage>
          </div>
        </section>
        <section>
          <SermonsSlider data={sermons} />
        </section>
        <section className="container">
          <OurCommitment />
        </section>
        <section>
          <FindUsOn />
        </section>
      </Layout>
    );
  }
}
export const pageQuery = graphql`
  query SermonsQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulSermon(sort: { fields: createdAt, order: DESC }) {
      nodes {
        createdAt
        id
        title
        featured
        reference
        imageThumbnail {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        description {
          json
        }
        slug
      }
    }
  }
`;
