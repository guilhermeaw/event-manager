import { Router } from 'express';

import CertificatesController from '../controllers/CertificatesController';

const certificatesRouter = Router();

const certificatesController = new CertificatesController();

certificatesRouter.post('/', certificatesController.create);
certificatesRouter.get('/:user_id/:event_id', certificatesController.index);

export default certificatesRouter;
