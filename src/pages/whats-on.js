import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import WhatsOnItem from "../components/whats-on-item";

class WhatsOn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;

    return (
      <Layout>
        <Helmet>
          <title>What's On - Gracehouse Church Logan</title>
          <meta
            property="og:title"
            content="What's On - Gracehouse Church Logan"
          />
          <meta
            name="description"
            content="Discover our events. We run Sunday Services, Midweek Gatherings, Prayer Meetings and more."
          />
          <meta
            property="og:description"
            content="Discover our events. We run Sunday Services, Midweek Gatherings, Prayer Meetings and more."
          />
        </Helmet>
        <section className="updates-header">
          <div className="container">
            <h1>
              What's <span>On</span>
            </h1>
          </div>
        </section>
        <section className="generic-body">
          <div className="container">
            <div className="whats-on-list">
              {/* 7.30 - 8.30 */}
              <WhatsOnItem
                title="Sunday Service"
                url="https://youtu.be/9vXe3Q_M1sE"
                extraTitle={"Church"}
                isYouTube={true}
                extraText={"Sun 10:00am"}
                times={[
                  {
                    startTime: {
                      dayOfWeek: 7,
                      hours: 10,
                      minutes: 0,
                    },
                    endTime: {
                      dayOfWeek: 7,
                      hours: 12,
                      minutes: 0,
                    },
                  },
                ]}
              />
              <WhatsOnItem
                title="Midweek Gatherings"
                extraText={"Wed 7:30pm - 9:30pm"}
              />
              <WhatsOnItem
                title="Morning Prayer Meetings"
                url="https://zoom.us/j/898014747"
                extraTitle={"Church"}
                extraText={"Mon & Fri 6:30am - 7:30am"}
                times={[
                  {
                    startTime: {
                      dayOfWeek: 3,
                      hours: 6,
                      minutes: 30,
                    },
                    endTime: {
                      dayOfWeek: 3,
                      hours: 7,
                      minutes: 30,
                    },
                  },
                ]}
              />
              <WhatsOnItem title="Inter-Church Prayer" extraText="Fortnightly Fri - 7:30pm"/>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default WhatsOn;

export const pageQuery = graphql`
  query WhatsOnQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
