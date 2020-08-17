import React from "react";
import "../sass/main.sass";
import Helmet from "react-helmet";
import Nav from "../components/nav";
import Footer from "../components/footer";

class Template extends React.Component {
  componentDidMount() {}

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>gracehouse Church Logan | Jesus is Life</title>
          <meta
            property="og:title"
            content="gracehouse Church Logan | Jesus is Life"
          />
          <meta
            name="description"
            content="gracehouse is a community in Logan passionate about Jesus. We exist to exalt him, host his presence, bring his Kingdom and see lives transformed."
          />
          <meta
            property="og:description"
            content="gracehouse is a community in Logan passionate about Jesus. We exist to exalt him, host his presence, bring his Kingdom and see lives transformed."
          />
          <link rel="stylesheet" href="https://use.typekit.net/dsw7hbd.css" />
        </Helmet>
        <Nav />
        <div>{children}</div>
        <Footer />
      </div>
    );
  }
}

export default Template;
