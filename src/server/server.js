require('dotenv').config();

const Hapi = require('@hapi/hapi');
const routes = require('../server/routes');
const loadModel = require('../services/loadModel');
const InputError = require('../exceptions/InputError');

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0', // allowed for public, change to frontend ip
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  const model = await loadModel();
  server.app.model = model; // store model dalam run time (dapat diakses dimanapun dalam server) untuk meminimalkan interaksi dengan bucket (mengurangi latensi dan cost untuk bucket)

  server.route(routes);

  /*
    server.ext menerima 2 argumen : 
      1. event bernama 'onPreResponse' 
      2. method, sebuah function yang menerima 2 argumen : 'request' & 'h'
  */

  server.ext('onPreResponse', (request, h) => {
    const response = request.response;

    if (response instanceof InputError) {
      const newResponse = h.response({
        status: 'fail',
        message: `${response.message} Silahkan gunakan foto lain`,
      });

      newResponse.code(response.statusCode);

      return newResponse;
    }

    if (response.isBoom) {
      // bernilai true ketika ada error dari server

      const statusCode = response.output ? response.output.statusCode : 500;

      const newResponse = h.response({
        status: 'fail',
        message: response.message,
      });

      newResponse.code(statusCode);

      return newResponse;
    }

    return h.continue; // melanjutkan request jika tidak terjadi error
  });

  await server.start();

  console.log(`Server start at: ${server.info.uri}`);
})();
