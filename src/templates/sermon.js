import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackgroundImage from "gatsby-background-image";
import SermonsSlider from "../components/Sermons-Slider";
import FindUsOn from "../components/find-us-on";
import PlaySermon from "../img/icon/play.inline.svg";
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
            <BackgroundImage
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
            </BackgroundImage>
          </div>
        </section>
        <section className="single-sermon-middle ">
          <div className="content container">
            <div></div>
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

          <SermonsSlider data={sermons} />
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
