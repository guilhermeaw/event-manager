import { Router } from 'express';

import certificatesRouter from '@modules/certificates/routes/certificates.routes';

const routes = Router();

routes.use('/certificates', certificatesRouter);

export default routes;
