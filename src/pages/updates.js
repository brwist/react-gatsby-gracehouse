import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import SignUp from "../components/sign-up";
import UpdatePreview from "../components/update-preview";

class Updates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    const updates = data.allContentfulUpdate.nodes;

    return (
      <Layout>
        <Helmet>
          <title>Updates - Gracehouse Church Logan</title>
          <meta property="og:title" content="Updates - Gracehouse Church Logan" />
          <meta
            name="description"
            content="Keep up to date with the latest news in gracehouse. You can check for updates here or subscribe to our update newsletter."
          />
          <meta
            property="og:description"
            content="Keep up to date with the latest news in gracehouse. You can check for updates here or subscribe to our update newsletter."
          />
          <meta
            property="og:image"
            content={data.headerImage2.childImageSharp.fluid.src}
          />
        </Helmet>
        <section className="updates-header">
          <div className="container">
            <h1>
              Latest <span>Updates</span>
            </h1>
            <p className="disclaimer">
              Sign up for email updates on the life of the church.
            </p>
            <SignUp />
          </div>
        </section>
        <section className="generic-body">
          <div className="container">
            <div className="update-list">
              {updates.map((update, index) => (
                <UpdatePreview update={update} key={update.id} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Updates;

export const pageQuery = graphql`
  query UpdatesQuery {
    site {
      siteMetadata {
        title
      }
    }
    headerImage2: file(relativePath: { eq: "church.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulUpdate(
      sort: { fields: createdAt, order: DESC }
      filter: { showOnWebsite: { eq: true } }
    ) {
      nodes {
        createdAt
        id
        description {
          childMarkdownRemark {
            html
          }
        }
        title
        user {
          firstName
          lastName
          image {
            fixed(width: 40) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
        showOnWebsite
        slug
      }
    }
  }
`;
