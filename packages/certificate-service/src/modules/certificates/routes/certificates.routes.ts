import { Router } from 'express';

import CertificatesController from '../controllers/CertificatesController';

const certificatesRouter = Router();

const certificatesController = new CertificatesController();

certificatesRouter.post('/create', certificatesController.create);
certificatesRouter.post('/validate', certificatesController.findByHash);

certificatesRouter.get(
  '/user/:user_id/event/:event_id',
  certificatesController.index,
);

export default certificatesRouter;
