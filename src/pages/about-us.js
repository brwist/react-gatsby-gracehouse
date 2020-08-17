import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import Img from "gatsby-image";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Helmet>
          <title>About - Gracehouse Church Logan</title>
          <meta property="og:title" content="About - Gracehouse Church Logan" />
          <meta
            name="description"
            content="We are a Christian Church led by pastors Theunis Pretorius and Patrick McConnell. Read our core beliefs."
          />
          <meta
            property="og:description"
            content="We are a Christian Church led by pastors Theunis Pretorius and Patrick McConnell. Read our core beliefs."
          />
        </Helmet>
        <section className="updates-header">
          <div className="container">
            <h1>About Us</h1>
          </div>
        </section>
        <section className="generic-body rich-text-body">
          <div className="container">
            <div className="generic-rich-text">
              <h2 className="h1">Pastoral Team</h2>
              <div className="pastoral-team">
                <div className="pastor">
                  <Img fluid={data.patHeadshot.childImageSharp.fluid} />
                  <p>Patrick McConnell</p>
                </div>
                <div className="pastor">
                  <Img fluid={data.theunisHeadshot.childImageSharp.fluid} />
                  <p>Theunis Pretorius</p>
                </div>
              </div>
              <h2 className="h1">Our Beliefs</h2>
              <ul>
                <li>
                  We believe that the Scriptures, both Old and New Testaments,
                  are the inspired Word of God, the complete revelation of his
                  will for the salvation of mankind, and the highest authority
                  for all Christian faith and life.
                </li>
                <li>
                  We believe that the one true God exists eternally in three
                  persons, Father, Son, and Holy Spirit, and that these, being
                  one God, are equal in deity, power, and glory. We believe that
                  God not only created the world but also now upholds, sustains,
                  and governs the world by the power of his word.
                </li>
                <li>
                  We believe that God the Son became a human being in the person
                  of Jesus Christ. That He was conceived of the Holy Spirit,
                  born of the Virgin Mary, lived a sinless life (for He was
                  without sin), died a substitutionary death for all mankind,
                  was raised from the dead on the third day, ascended into
                  heaven, and is seated at the right hand of God until His
                  enemies are made His footstool, and at that time he will
                  return to judge the living and the dead.
                </li>
                <li>
                  We believe that the Holy Spirit is fully God, equal with the
                  Father and Son. The primary ministry of the Holy Spirit is to
                  glorify the Lord Jesus Christ. The Holy Spirit also convicts
                  unbelievers of their need for Christ and imparts spiritual
                  life through faith and repentance. The Spirit regenerates,
                  indwells, sanctifies, leads, illumines, and graciously
                  empowers for godly living and service all who come to faith in
                  Christ.
                </li>
                <li>
                  We believe that Jesus perfectly revealed and did the will of
                  God, taking upon Himself human nature with its demands and
                  necessities and identifying Himself completely with mankind
                  yet without sin. He honoured the divine law by His personal
                  obedience, and in His substitutionary death on the cross, he
                  took upon himself the penalty of the law, he conquered the
                  power of sin and death, and made provision for the redemption
                  of men from sin and the punishment thereof. We affirm that
                  Jesus Christ is the only available and effective sacrifice for
                  the sins of every person.
                </li>
                <li>
                  We believe that the ministry of the Spirit in signs and
                  wonders continues to be as broad, tangible, and powerful among
                  believers today as it was in the early church. We also believe
                  that all the biblical gifts of the Spirit continue to be
                  distributed by the Spirit today; that these gifts are divine
                  provisions central to spiritual growth and effective ministry;
                  and that these gifts are to be eagerly desired, faithfully
                  developed, and lovingly exercised according to biblical
                  guidelines.
                </li>
                <li>
                  We believe that Adam was created in the image of God,
                  righteous and without sin. In consequence of his disobedience,
                  Adam’s posterity are born subject to the power of sin and
                  death, and as such are inherently corrupted in a way that
                  affects every aspect of their being, For this reason, every
                  person is from birth a child of wrath and will indeed sin. On
                  account of this sin, mankind are justly cut off from a loving
                  relationship with God, and are deserving of eternal
                  condemnation.
                </li>
                <li>
                  We believe that the Church is the Bride of Christ and is
                  comprised of all believers in every age. The Church is also
                  God’s primary instrument through which he is fulfilling his
                  redemptive purposes in the earth. We believe that God has
                  called the Church to preach the gospel to all nations, and
                  especially to remember the poor and disadvantaged and to
                  minister to their needs through sacrificial giving and
                  practical service. We also affirm the priesthood of all
                  believers and the importance of every Christian being joined
                  with and actively involved in a local community of the saints.
                </li>
                <li>
                  We believe that water baptism and the Lord’s Supper are the
                  two ordinances of the church to be observed until the time of
                  Christ’s return. While they do not save in and of themselves,
                  they are channels of God’s sanctifying grace and blessing.
                  Only those who have personally and consciously placed their
                  faith in Jesus Christ as Lord and Saviour are qualified to
                  receive the sacraments.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default AboutUs;

export const pageQuery = graphql`
  query AboutUsQuery {
    site {
      siteMetadata {
        title
      }
    }
    patHeadshot: file(relativePath: { eq: "p-headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 210) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    theunisHeadshot: file(relativePath: { eq: "t-headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 210) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
