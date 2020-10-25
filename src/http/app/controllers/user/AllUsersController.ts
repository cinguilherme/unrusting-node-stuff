import { Command } from '../../../../application/usecases/find-user/Command';
import { Responder } from '../../../../application/usecases/find-user/Responder';
import User from '../../../../modules/user/domain/User';
import ApiControllers from '../ApiControllers';

class UserController extends ApiControllers implements Responder {
    
    private users: Array<User> = [];
    
    usersFound(users: Array<User>): void {
        console.log('users found');
        
        this.users = users;
    }
    usersNotFound(): void {
        throw new Error('users not found');
    }
    
   
    async getAll(): Promise<Array<User>> {

        await this.getUserCase(ApiControllers.ALL_USERS_USE_CASE)
        .execute(new Command(), this);

        return this.users;
    }
}

export default new UserController();