import { Router } from 'express';

import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/sessions/routes/sessions.routes';
import userTokensRouter from '@modules/users/routes/userTokens.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/tokens', userTokensRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
