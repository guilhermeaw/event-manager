import { Router } from 'express';

import UserTokensController from '../controllers/UserTokensController';

const userTokensRouter = Router();

const userTokensController = new UserTokensController();

userTokensRouter.post('/', userTokensController.create);

export default userTokensRouter;
