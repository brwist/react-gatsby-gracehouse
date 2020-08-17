const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const updatePage = path.resolve("./src/templates/update.js");
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
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const updates = result.data.allContentfulUpdate.nodes;
        updates.forEach((update) => {
          createPage({
            path: `/update/${update.slug}/`,
            component: updatePage,
            context: {
              slug: update.slug,
            },
          });
        });
      })
    );
  });
};
