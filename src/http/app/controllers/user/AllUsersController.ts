import { Get, Controller, JsonController } from 'routing-controllers';
import { Command } from '../../../../application/usecases/find-user/Command';
import { Responder } from '../../../../application/usecases/find-user/Responder';
import User from '../../../../modules/user/domain/User';
import ApiControllers from '../ApiControllers';

@JsonController('/users')
class UserController extends ApiControllers implements Responder {
    
    private users: Array<User> = [];
    
    usersFound(users: Array<User>): void {
        this.users = users;
    }
    usersNotFound(): void {
        throw new Error('users not found');
    }
    
   
    @Get('/notes')
    async getAll() {

        await this.getUserCase(ApiControllers.ALL_USERS_USE_CASE)
        .execute(new Command(), this);

        return this.users;
    }
}

export default new UserController();