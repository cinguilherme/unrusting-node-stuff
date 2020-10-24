import { Request, Response } from 'express';
import { JsonController, Get } from 'routing-controllers';

@JsonController()
class UserController {
    
   
    @Get('/notes')
    async getAll(req: Request, res: Response) {
        //const data = await UserModel.find({});
        return res.json({todo:"building"});
    }
}

export default new UserController();