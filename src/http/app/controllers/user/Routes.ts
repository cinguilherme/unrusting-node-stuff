import { Request, Response } from 'express';
import { Router } from 'express';
import AllUsersController from './AllUsersController';


const usersRouter = Router();

usersRouter.get('/users', async (req: Request, res: Response) => {
    
    const users = await  AllUsersController.getAll();
    return res.json({data: users});
});

export default usersRouter;