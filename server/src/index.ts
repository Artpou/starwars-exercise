import { server } from './config/server';
import { router } from './router';  

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);

  server.route(router);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();