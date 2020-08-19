import React, { Component } from "react";
import Spotify from "../img/icon/spoity-find.inline.svg";
import ApplePodcasts from "../img/icon/apple-find.inline.svg";
import Youtube from "../img/icon/youtube-find.inline.svg";
import { OutboundLink } from "gatsby-plugin-google-analytics";
class FindUsOn extends Component {
  render() {
    return (
      <div className="find-us-on">
        <h2>Find Us On</h2>
        <div className="find-us">
          <div className="social-div">
            <OutboundLink
              target="_blank"
              href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ/"
            >
              <span>
                <Youtube />
                <h3>Youtube</h3>
              </span>
            </OutboundLink>
          </div>

          <div className="social-div">
            <OutboundLink
              target="_blank"
              href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ/"
            >
              <span>
                <Spotify />
                <h3>Spotify</h3>
              </span>
            </OutboundLink>
          </div>

          <div className="social-div">
            <OutboundLink
              target="_blank"
              href="https://www.youtube.com/channel/UC7ko9KyfJ5PS9eOuhjuWmbQ/"
            >
              <span>
                <ApplePodcasts />
                <h3>Apple Podcasts</h3>
              </span>
            </OutboundLink>
          </div>
        </div>
      </div>
    );
  }
}

export default FindUsOn;
