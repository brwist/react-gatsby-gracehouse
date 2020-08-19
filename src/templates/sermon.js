import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackgroundImage from "gatsby-background-image";
import SermonsSlider from "../components/Sermons-Slider";
import FindUsOn from "../components/find-us-on";
import Youtube from "../img/icon/youtube-orange.inline.svg";
import Spotify from "../img/icon/spotify-orange.inline.svg";
import ApplePodCasts from "../img/icon/apple-orange.inline.svg";
import Download from "../img/icon/download-orange.inline.svg";
import GoBack from "../img/icon/arrow-left-orange.inline.svg";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import AniLink from "gatsby-plugin-transition-link/AniLink";
class Sermon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    const sermon = data.contentfulSermon;
    const sermons = data?.allContentfulSermon?.nodes;

    return (
      <Layout>
        <Helmet>
          <title>Sermon - {sermon.title}</title>
          <meta property="og:title" content={`Sermon - ${sermon.title}`} />
          <meta
            name="description"
            // content={update.description.childMarkdownRemark.excerpt}
          />
          <meta
            property="og:description"
            // content={update.description.childMarkdownRemark.excerpt}
          />
          <meta
            property="og:image"
            // content={data.headerImage.childImageSharp.fluid.src}
          />
        </Helmet>

        <section className="single-sermon-header">
          <div className="hero-background-wrapper">
            {/* <BackgroundImage
              Tag="section"
              fluid={sermon?.imageThumbnail.fluid}
              className="hero-background"
              style={{
                backgroundPositionY: "top",
              }}
            >
              <div className="sermon-play-button">
                <PlaySermon />
              </div>
            </BackgroundImage> */}
            <iframe
              className="background-video"
              src={`${sermon?.videoUrl}?autoplay=1&showinfo=0&controls=0&enablejsapi=1`}
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </section>
        <section className="single-sermon-middle ">
          <div className="content container">
            <div className="social-container">
              <AniLink fade to="/sermons">
                <div className="go-back">
                  <span>
                    <GoBack />
                  </span>
                  <p>Back To Sermons</p>
                </div>
              </AniLink>
              <div>
                <ul>
                  <li>
                    <OutboundLink href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ/">
                      <Youtube />
                    </OutboundLink>
                  </li>
                  <li>
                    <OutboundLink href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ/">
                      <Spotify />
                    </OutboundLink>
                  </li>
                  <li>
                    <OutboundLink href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ/">
                      <ApplePodCasts />
                    </OutboundLink>
                  </li>
                  <li>
                    <OutboundLink href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ/">
                      <Download />
                    </OutboundLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sermon-data">
              <div className="sermon-title">
                <h2>
                  {sermon?.title}
                  <span className="title-orange">
                    {sermon?.highlightedTitle}
                  </span>
                </h2>
                <p>{sermon.reference}</p>
              </div>
              <div className="description">
                {documentToReactComponents(sermon?.description?.json)}
              </div>
            </div>
          </div>
        </section>
        <section className="watch-more-sermons ">
          <h2 className="watch-more-heading">Watch More Sermons</h2>

          <SermonsSlider
            data={sermons.filter((item) => item?.id !== sermon?.id)}
          />
        </section>
        <section>
          <FindUsOn />
        </section>
      </Layout>
    );
  }
}

export default Sermon;

export const pageQuery = graphql`
  query SermonBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    contentfulSermon(slug: { eq: $slug }) {
      id
      slug
      title
      highlightedTitle
      reference
      imageThumbnail {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      description {
        json
      }
      videoUrl
    }
    allContentfulSermon(sort: { fields: date, order: DESC }) {
      nodes {
        date
        id
        title
        highlightedTitle
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
        videoUrl
      }
    }
  }
`;
