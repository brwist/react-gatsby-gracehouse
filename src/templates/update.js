import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import AuthorDateInfo from "../components/author-date-info";
import showdown from "showdown";

class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    const update = data.contentfulUpdate;
    const descriptionMarkdown = update.description.childMarkdownRemark.rawMarkdownBody.replace(
      /^( *(\d+\. {1,4}|[\w\<\'\">\-*+])[^\n]*)\n{1}(?!\n| *\d+\. {1,4}| *[-*+] +|$)/gm,
      function(text) {
        return text.trim() + "  \n";
      }
    );

    const descriptionHtml = new showdown.Converter()
      .makeHtml(descriptionMarkdown)
      .replace(/src="\/\//g, 'src="https://');

    return (
      <Layout>
        <Helmet>
          <title>Update - {update.title}</title>
          <meta property="og:title" content={`Update - ${update.title}`} />
          <meta
            name="description"
            content={update.description.childMarkdownRemark.excerpt}
          />
          <meta
            property="og:description"
            content={update.description.childMarkdownRemark.excerpt}
          />
          <meta
            property="og:image"
            content={data.headerImage.childImageSharp.fluid.src}
          />
        </Helmet>
        <section className="updates-header">
          <div className="container">
            <h1>{update.title}</h1>
            <AuthorDateInfo update={update} inverted={true} />
          </div>
        </section>
        <section className="generic-body rich-text-body">
          <div className="container">
            <div
              className="generic-rich-text"
              dangerouslySetInnerHTML={{
                __html: descriptionHtml,
              }}
            ></div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Update;

export const pageQuery = graphql`
  query UpdateBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: file(relativePath: { eq: "church.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contentfulUpdate(slug: { eq: $slug }) {
      id
      description {
        childMarkdownRemark {
          rawMarkdownBody
          excerpt(format: PLAIN)
        }
      }
      createdAt
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
`;
