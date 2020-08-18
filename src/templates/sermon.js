import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import BackgroundImage from "gatsby-background-image";
class Sermon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    const sermon = data.contentfulSermon;

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
            ></BackgroundImage>
          </div>
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
  }
`;
