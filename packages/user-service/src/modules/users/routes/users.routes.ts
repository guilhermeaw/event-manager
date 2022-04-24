import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/create', usersController.create);
usersRouter.post('/pre-create', usersController.preCreate);

usersRouter.put('/update/:id', usersController.update);

usersRouter.get('/list-all', usersController.listAll);

usersRouter.get('/id/:id', usersController.findById);
usersRouter.get('/token/:token', usersController.findByToken);

export default usersRouter;
