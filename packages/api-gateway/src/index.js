import express from 'express';

import { routes } from './routes';

import {setupLogging} from './logging';
import {setupProxies} from './proxy';

const app = express()

// testa conexão git
app.use(express.json());

setupLogging(app);
setupProxies(app, routes);

app.listen(3000, () => {
  console.log('API gateway is up');
});
