const { dependencies } = require("./package.json");

module.exports = {
  name: "fossology",
  exposes: {
    "./App": "./src/App.jsx",
  },
  filename: "fossology.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
