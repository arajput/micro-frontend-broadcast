const { dependencies } = require('./package.json');

module.exports = {
  name: 'host2',
  exposes: {
  },
  remotes: {    
    AttendanceApp: 'AttendanceApp@http://localhost:3001/remote.js' 
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
