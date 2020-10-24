import express from 'express';
import UserController from '../adapters/UserController';

const routes = express.Router();

routes.get('/users', UserController.index);

routes.post('/users', UserController.store);

export default routes;