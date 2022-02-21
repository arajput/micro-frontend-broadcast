const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  devServer: {
    port: 9001,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
