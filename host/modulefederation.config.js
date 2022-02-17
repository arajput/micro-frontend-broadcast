const { dependencies } = require('./package.json');

module.exports = {
  name: 'host',
  exposes: {
  },
  remotes: {
    AttendanceApp: 'AttendanceApp@http://localhost:3001/remote.js',    
    ClassesApp: 'ClassesApp@http://localhost:3002/remote.js',
    fossology: 'fossology@http://localhost:3000/fossology.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
