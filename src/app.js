import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
const bp = require('body-parser');
import { config } from 'dotenv';

//routes
import routes from './routes/index';

const app = express();

//settings
app.disable('x-powered-by');
//app.use(express.json());

app.all('*', function (_, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

config();

const port = process.env.PORT || 3000;

app.set('port', port);

//middleware
app.use(morgan('dev'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//routes
routes(app);

export default app;
