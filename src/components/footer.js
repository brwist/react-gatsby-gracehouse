import React from "react";
import anime from "animejs/lib/anime.es.js";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import SignUp from "./sign-up";

class Footer extends React.Component {
  componentDidMount() {}

  onHoverLink() {
    anime({
      targets: ".gh-footer-right a",
      opacity: 0.5,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(75),
    });
  }

  onLeaveLink() {
    anime({
      targets: ".gh-footer-right a",
      opacity: 1,
      easing: "cubicBezier(0.115, 0.61, 0.255, 1)",
      delay: anime.stagger(75),
    });
  }

  render() {
    return (
      <>
        <footer className="gh-footer">
          <div className="gh-footer-left">
            <AniLink fade to="/" className="logo">
              Gracehouse Christian Church
            </AniLink>

            <div className="gh-footer-location">
              <h3>Location - Logan</h3>
              <p>
                123 Paradise Road
                <br />
                Slacks Creek,
                <br />
                Queensland, Australia 4127
              </p>
              <OutboundLink
                href="https://goo.gl/maps/gZUNvPwgDaB4TdJC7"
                className="link"
              >
                Get directions
              </OutboundLink>
            </div>
            <div>
              <p className="gh-sign-up-disclaimer-text">
                Sign up for email updates on the life of the church.
              </p>
              <SignUp />
            </div>
          </div>
          <div className="gh-footer-right">
            <ul>
              <li>
                <AniLink
                  onMouseEnter={this.onHoverLink}
                  onMouseLeave={this.onLeaveLink}
                  fade
                  to="/"
                >
                  Home
                </AniLink>
              </li>
              <li>
                <AniLink
                  onMouseEnter={this.onHoverLink}
                  onMouseLeave={this.onLeaveLink}
                  fade
                  to="/about-us"
                >
                  About
                </AniLink>
              </li>
              <li>
                <AniLink
                  onMouseEnter={this.onHoverLink}
                  onMouseLeave={this.onLeaveLink}
                  fade
                  to="/whats-on"
                >
                  What's On
                </AniLink>
              </li>
              <li>
                <OutboundLink
                  onMouseEnter={this.onHoverLink}
                  onMouseLeave={this.onLeaveLink}
                  href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ"
                >
                  Sermons
                </OutboundLink>
              </li>
              <li>
                <AniLink
                  onMouseEnter={this.onHoverLink}
                  onMouseLeave={this.onLeaveLink}
                  fade
                  to="/giving"
                >
                  Giving
                </AniLink>
              </li>
              <li>
                <AniLink
                  onMouseEnter={this.onHoverLink}
                  onMouseLeave={this.onLeaveLink}
                  fade
                  to="/updates"
                >
                  Updates
                </AniLink>
              </li>
              <li>
                <AniLink
                  onMouseEnter={this.onHoverLink}
                  onMouseLeave={this.onLeaveLink}
                  fade
                  to="/contact"
                >
                  Contact Us
                </AniLink>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
