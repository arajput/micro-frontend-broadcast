const { dependencies } = require("./package.json");

module.exports = {
  name: "AttendanceApp",
  filename: "remote.js",
  exposes: {
    "./App": "./src/App.js",
    "./Attendance":"./src/components/Attendance.js"
  },
  remotes:{
  },
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
