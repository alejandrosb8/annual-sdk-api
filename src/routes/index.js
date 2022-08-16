import express from 'express';
import loginRoute from './login';
import depositsRoute from './deposits';

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use(loginRoute);
  router.use(depositsRoute);
};

export default routerApi;
