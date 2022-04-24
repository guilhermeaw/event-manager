import { Router } from 'express';

import EventRegistrationController from '../controllers/EventRegistrationController';

const eventRegistrationRouter = Router();

const eventRegistrationController = new EventRegistrationController();

eventRegistrationRouter.post('/create', eventRegistrationController.create);
eventRegistrationRouter.post(
  '/quick-registration',
  eventRegistrationController.quickRegistration,
);

export default eventRegistrationRouter;
