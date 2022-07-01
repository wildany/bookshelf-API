import Hapi from '@hapi/hapi';
import routes from './routes.mjs';

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // an array of origins or 'ignore'
        credentials: true, // boolean - 'Access-Control-Allow-Credentials'
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
