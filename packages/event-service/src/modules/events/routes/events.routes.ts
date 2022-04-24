import { Router } from 'express';

import EventsController from '../controllers/EventsController';

const eventsRouter = Router();

const eventsController = new EventsController();

eventsRouter.post('/', eventsController.create);

eventsRouter.put('/checkin', eventsController.registerCheckin);

eventsRouter.get('/id/:id', eventsController.getById);
eventsRouter.get('/today-events', eventsController.listTodayEvents);
eventsRouter.get('/next-events', eventsController.listNextEvents);

export default eventsRouter;
