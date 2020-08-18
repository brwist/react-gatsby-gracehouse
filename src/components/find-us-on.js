import React, { Component } from "react";
import Spotify from "../img/icon/spoity-find.inline.svg";
import ApplePodcasts from "../img/icon/apple-find.inline.svg";
import Youtube from "../img/icon/youtube-find.inline.svg";
class FindUsOn extends Component {
  render() {
    return (
      <div className="find-us-on">
        <h2>Find Us On</h2>
        <div className="find-us">
          <div className="social-div">
            <span>
              <Youtube />
              <h3>Youtube</h3>
            </span>
          </div>
          <div className="social-div">
            <span>
              <Spotify />
              <h3>Spotify</h3>
            </span>
          </div>
          <div className="social-div">
            <span>
              <ApplePodcasts />
              <h3>Apple Podcasts</h3>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FindUsOn;
