import { Router } from 'express';

import EventRegistrationController from '../controllers/EventRegistrationController';

const eventRegistrationRouter = Router();

const eventRegistrationController = new EventRegistrationController();

eventRegistrationRouter.post('/', eventRegistrationController.create);

export default eventRegistrationRouter;
