const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  devServer: {
    port: 9000,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
