
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['8rcAyvkhbHxY3AMFp17fnd'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  