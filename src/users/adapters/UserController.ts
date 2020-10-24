import { Request, Response } from 'express';
import UserModel from '../domain/UserModel';

class UserController {
    
    async store(req: Request, res: Response) {
        const data = await UserModel.create(req.body);
        return res.json(data);
    }

    async index(req: Request, res: Response) {
        //const data = await UserModel.find({});
        return res.json({todo:"building"});
    }
}

export default new UserController();