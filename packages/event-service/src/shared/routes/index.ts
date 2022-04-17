import { Router } from 'express';

import eventsRouter from '@modules/events/routes/events.routes';

const routes = Router();

routes.use('/events', eventsRouter);

export default routes;
