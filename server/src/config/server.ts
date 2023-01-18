import Hapi from '@hapi/hapi';

const PORT = process.env.PORT || 8000;

export const server = Hapi.server({
  port: PORT,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});
