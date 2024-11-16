const postPredictHandler = require('./handlers');

const generateMaxBytes = (megaBytesSize) => {
  return megaBytesSize * 1024 * 1024;
};

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data', // allow input berupa gambar (file)
        multipart: true, // parse multipart input (mandatory syntax)
        maxBytes: generateMaxBytes(1), // max 1 mb
      },
    },
  },
];

module.exports = routes;
