import React from "react";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import AuthorDateInfo from "./author-date-info";

export default ({ update, inverted }) => (
  <AniLink
    className="update-preview"
    to={`/update/${update.slug}`}
    fade
  >
    <h2>{update.title}</h2>
    <AuthorDateInfo update={update} />
  </AniLink>
);
