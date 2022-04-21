import express from 'express';
import 'express-async-errors';

import routes from './routes';
import errors from './middlewares/errors';
import { initializeDataSource } from './database/ormconfig';

initializeDataSource();

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors);

export default app;
