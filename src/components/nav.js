import React from "react";
import anime from "animejs/lib/anime.es.js";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { OutboundLink } from "gatsby-plugin-google-analytics";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggleNav() {
    if (this.state.isOpen) this.closeNav();
    else this.openNav();
  }

  closeNav() {
    if (typeof window !== "undefined")
      window.document.body.classList.remove("prevent-scroll");
    this.setState({
      isOpen: false,
    });
    anime({
      targets: ".nav-mobile-menu ul li",
      opacity: 0,
      top: 20,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(100),
    });
  }

  openNav() {
    if (typeof window !== "undefined")
      window.document.body.classList.add("prevent-scroll");
    this.setState({
      isOpen: true,
    });
    anime({
      targets: ".nav-mobile-menu ul li",
      opacity: 1,
      top: 0,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(100, {
        start: 1000,
      }),
    });
  }

  componentDidMount() {}

  onHoverLink() {
    anime({
      targets: ".gh-nav .link",
      opacity: 0.5,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(100),
    });
  }

  onLeaveLink() {
    anime({
      targets: ".gh-nav .link",
      opacity: 1,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(100),
    });
  }

  render() {
    return (
      <React.Fragment>
        <nav className="gh-nav">
          <AniLink className="logo" to="/" fade>
            Gracehouse Christian Church
          </AniLink>
          <ul>
            <li>
              <AniLink
                onMouseEnter={this.onHoverLink}
                onMouseLeave={this.onLeaveLink}
                className="link"
                fade
                to="/"
              >
                Home
              </AniLink>
              <AniLink
                onMouseEnter={this.onHoverLink}
                onMouseLeave={this.onLeaveLink}
                className="link"
                fade
                to="/about-us"
              >
                About
              </AniLink>
              <AniLink
                onMouseEnter={this.onHoverLink}
                onMouseLeave={this.onLeaveLink}
                className="link"
                fade
                to="/whats-on"
              >
                What's On
              </AniLink>
              <AniLink
                onMouseEnter={this.onHoverLink}
                onMouseLeave={this.onLeaveLink}
                className="link"
                fade
                to="/sermons"
              >
                Sermons
              </AniLink>
            </li>
          </ul>
          <ul>
            <li>
              <AniLink
                onMouseEnter={this.onHoverLink}
                onMouseLeave={this.onLeaveLink}
                className="link"
                fade
                to="/giving"
              >
                Giving
              </AniLink>
              <AniLink
                onMouseEnter={this.onHoverLink}
                onMouseLeave={this.onLeaveLink}
                className="link"
                fade
                to="/updates"
              >
                Updates
              </AniLink>
              <AniLink
                onMouseEnter={this.onHoverLink}
                onMouseLeave={this.onLeaveLink}
                className="link"
                fade
                to="/contact"
              >
                Contact Us
              </AniLink>
            </li>
            <li className="top-nav-hamburger">
              <button
                onClick={() => this.toggleNav()}
                className={`hamburger hamburger--collapse ${
                  this.state.isOpen ? "is-active" : ""
                }`}
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </li>
          </ul>
        </nav>
        <div
          className={`nav-mobile-menu ${
            this.state.isOpen ? "nav-mobile-menu--open" : ""
          }`}
        >
          <ul>
            <li>
              <AniLink fade to="/" onClick={() => this.closeNav()}>
                Home
              </AniLink>
            </li>
            <li>
              <AniLink fade to="/about-us" onClick={() => this.closeNav()}>
                About
              </AniLink>
            </li>
            <li>
              <AniLink fade to="/whats-on" onClick={() => this.closeNav()}>
                What's On
              </AniLink>
            </li>
            <li>
              <OutboundLink href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ">
                Sermons
              </OutboundLink>
            </li>
            <li>
              <AniLink fade to="/giving" onClick={() => this.closeNav()}>
                Giving
              </AniLink>
            </li>
            <li>
              <AniLink fade to="/updates" onClick={() => this.closeNav()}>
                Updates
              </AniLink>
            </li>
            <li>
              <AniLink fade to="/contact" onClick={() => this.closeNav()}>
                Contact Us
              </AniLink>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
