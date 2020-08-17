import React from "react";
import Img from "gatsby-image";
import moment from "moment";

export default ({ update, inverted }) => (
  <div
    className={`author-date-info ${
      inverted ? "author-date-info--inverted" : ""
    }`}
  >
    <div className="adi-author">
      <Img fixed={update.user.image.fixed} />

      <div className="adi-author__name">
        {update.user.firstName} {update.user.lastName}
      </div>
    </div>
    <p>{moment(update.createdAt).format('DD MMM YYYY')}</p>
  </div>
);
