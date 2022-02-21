const { dependencies } = require("./package.json");

module.exports = {
  name: "ClassesApp",
  exposes: {
    "./App": "./src/App.js",    
    "./MyClasses": "./src/components/MyClasses.js"

  },
  remotes: {
    AttendanceApp: 'AttendanceApp@http://localhost:3001/remote.js' 

  },
  filename: "remote.js",
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
    postal: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
  },
};
