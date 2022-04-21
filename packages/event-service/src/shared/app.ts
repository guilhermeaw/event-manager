import express from 'express';

import { initializeDataSource } from './database/ormconfig';
import errors from './middlewares/errors';
import routes from './routes';

initializeDataSource();

const app = express();
app.use(express.json());
app.use(routes);
app.use(errors);

export default app;
