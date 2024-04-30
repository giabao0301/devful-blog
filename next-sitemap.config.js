const siteMetadata = require("./src/utils/siteMetaData");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  // transform: async (config, path) => {
  //   // Define a regex pattern to match paths like "/categories/<anything>-<a number>"
  //   const regexPattern = /-.+?-\d+$/;

  //   // Check if the path matches the regex pattern
  //   if (regexPattern.test(path)) {
  //     return null; // Return null to exclude the path
  //   }

  //   // If no exclusion criteria match, return the original path
  //   return path;
  // },
};
