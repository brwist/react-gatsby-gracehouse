import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Helmet from "react-helmet";

class Giving extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   var tw = create_tithely_widget();
  // }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Helmet>
          <meta
            property="og:image"
            content={data.headerImage2.childImageSharp.fluid.src}
          />
          <title>Gracehouse Church Logan | Giving</title>
          <meta
            property="og:title"
            content="Giving - Gracehouse Church Logan"
          />
          <meta
            name="description"
            content="Would you like to partner with gracehouse financially? We are funded by your generosity. You can easily setup once-off or recurring payments."
          />
          <meta
            property="og:description"
            content="Would you like to partner with gracehouse financially? We are funded by your generosity. You can easily setup once-off or recurring payments."
          />
        </Helmet>
        <section className="generic-header"></section>
        <section className="generic-body">
          <div className="container">
            <h1>Giving</h1>
            <div className="columns">
              <div className="column is-three-fifths">
                <p>
                  The mission and vision of gracehouse is directly funded by the
                  generosity of people like you. We honour your gifts with
                  faithful stewardship and accountability so you can have full
                  confidence in the financial integrity of gracehouse.
                </p>
              </div>
              <div className="column">
                <h2>Direct Debit</h2>
                <p>Name: General Account</p>
                <p>BSB: 084 435</p>
                <p>Account #: 925 669 822</p>
                <br />
                <h2>Tithely</h2>
                <p>
                  gracehouse has partnered with{" "}
                  <a
                    className="generic-link"
                    href="https://get.tithe.ly/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tithely
                  </a>{" "}
                  to offer you a simple, safe way to do once-off or recurring
                  payments.
                </p>
                <br />
                <button className="tithely-give-btn" data-church-id="1145754">
                  Give
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Giving;

export const pageQuery = graphql`
  query GivingQuery {
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
  }
`;
