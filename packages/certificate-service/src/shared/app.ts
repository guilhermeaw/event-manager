import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import errors from './middlewares/errors';
import { initializeDataSource } from './database/ormConfig';

initializeDataSource();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors);

export default app;
