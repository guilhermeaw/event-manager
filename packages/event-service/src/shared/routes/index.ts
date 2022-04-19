import { Router } from 'express';

import eventsRouter from '@modules/events/routes/events.routes';
import eventsRegistrationRouter from '@modules/events/routes/eventsRegistration.routes';

const routes = Router();

routes.use('/events', eventsRouter);
routes.use('/eventsRegistration', eventsRegistrationRouter);

export default routes;
