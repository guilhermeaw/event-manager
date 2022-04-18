import express from 'express';

import { initializeDataSource } from './database/ormconfig';

initializeDataSource();

const app = express();

export default app;
