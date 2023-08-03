// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "cycivs07",
        mongodb_password: "aSLUEso4X9sjdLmJ",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "cycivs07",
      mongodb_password: "aSLUEso4X9sjdLmJ",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
