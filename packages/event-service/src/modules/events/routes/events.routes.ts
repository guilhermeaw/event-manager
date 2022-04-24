import { Router } from 'express';

import EventsController from '../controllers/EventsController';

const eventsRouter = Router();

const eventsController = new EventsController();

eventsRouter.post('/', eventsController.create);

eventsRouter.get('/id/:id', eventsController.getById);
eventsRouter.get('/today-events', eventsController.listTodayEvents);

export default eventsRouter;
