// @ts-ignore
const path = require("path");
const crypto = require('crypto');
const axios = require('axios');

// @ts-ignore
exports.sourceNodes = async ({ actions }) => {

  /* STEP 1. Create the GraphQL nodes for our "Pages".
  First we need to register the data to the GraphQL datastore
  This will then allow us to query for the data on the page in a more performant way...
  ...we can talk about why later...
  */
  const {createNode, createPage} = actions;

  /* CREATE DATA IN GRAPHQL */

  const URL_BASE = 'https://bgwp-010.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-whitelabel-Site/default';

  // Say this storefront is made up of X pages. We can make this dynamic like this.
  const pages = [
    'buy-Serialize'
  ];

  for (const page of pages) {
    const { data: pageData } = await axios.get(`${URL_BASE}/${page}`).catch((error) => {
      console.log(error);
    });

    const sfrPageNode = {
      id: page,
      parent: `__SOURCE__`,
      internal: {
        type: `PtsCCPage`,
        contentDigest: ''
      },
      children: [],
      pageData,
    }

    // @ts-ignore
    sfrPageNode.internal.contentDigest = crypto.createHash(`md5`)
      .update(JSON.stringify(sfrPageNode))
      .digest(`hex`);

    createNode(sfrPageNode);
  }
}

// @ts-ignore
exports.createPages = async function ({ actions, graphql }) {

  const { data } = await graphql(`
      {
          allPtsCcPage {
              nodes {
                  pageData {
                      id
                      type_id
                  }
              }
          }
      }
  `);

  data.allPtsCcPage.nodes.forEach(({pageData}) => {
    actions.createPage({
      path: `/${pageData.type_id}/${pageData.id}/`,
      component: path.resolve(`./src/templates/PageTemplate.jsx`),
      context: {
        ...pageData,
      },
    })
  });


}
