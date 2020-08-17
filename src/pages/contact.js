import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-analytics";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Helmet>
          <meta
            property="og:image"
            content={data.headerImage3.childImageSharp.fluid.src}
          />
          <title>Contact - Gracehouse Church Logan</title>
          <meta
            property="og:title"
            content="Contact - Gracehouse Church Logan"
          />
          <meta
            name="description"
            content="Please contact us if you would like any information regarding our church, events, or if you would like to inquire about hiring our building for your event."
          />
          <meta
            property="og:description"
            content="Please contact us if you would like any information regarding our church, events, or if you would like to inquire about hiring our building for your event."
          />
        </Helmet>
        <section className="generic-header"></section>
        <section className="generic-body">
          <div className="container">
            <h1>Contact Us</h1>
            <div className="columns">
              <div className="column is-three-fifths">
                <p>
                  Please let us know if you have any questions regarding our
                  church, any of our events, or if you would like to request
                  information regarding the hiring and use of our building and
                  premises.
                </p>
              </div>
              <div className="column">
                <h2>Admin</h2>
                <p>
                  <OutboundLink
                    className="generic-link"
                    href="mailto:admin@gracehouse.com.au"
                  >
                    admin@gracehouse.com.au
                  </OutboundLink>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
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
