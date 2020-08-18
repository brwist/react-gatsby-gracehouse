const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const updatePage = path.resolve("./src/templates/update.js");
    const sermonPage = path.resolve("./src/templates/sermon.js");
    resolve(
      graphql(
        `
          {
            allContentfulUpdate(filter: { showOnWebsite: { eq: true } }) {
              nodes {
                title
                slug
              }
            }
            allContentfulSermon {
              nodes {
                title
                slug
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const updates = result.data.allContentfulUpdate.nodes;
        const sermons = result.data.allContentfulSermon.nodes;
        console.log(sermons);
        updates.forEach((update) => {
          createPage({
            path: `/update/${update.slug}/`,
            component: updatePage,
            context: {
              slug: update.slug,
            },
          });
        });
        sermons.forEach((sermon) => {
          createPage({
            path: `/sermons/${sermon.slug}/`,
            component: sermonPage,
            context: {
              slug: sermon.slug,
            },
          });
        });
      })
    );
  });
};
