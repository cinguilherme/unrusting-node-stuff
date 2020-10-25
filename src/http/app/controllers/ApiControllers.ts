import {Controller, JsonController} from 'routing-controllers';
import { UseCase as FindUsers } from '../../../application/usecases/find-user/UseCase';
import { UsersRepository } from '../../../modules/user/domain/UsersRepository';
import { InMemoryUserRepository } from '../../../modules/user/infrastructure/InMemoryUserRepository';

@JsonController()
export default class ApiControllers {

    private useCases: Map<string, any> = new Map<string, any>();
    protected static readonly ALL_USERS_USE_CASE = 'allUsers';

    public static userRepo: UsersRepository = new InMemoryUserRepository();


    constructor() {
        const userRepo = ApiControllers.userRepo;

        this.useCases.set(ApiControllers.ALL_USERS_USE_CASE, new FindUsers(userRepo));

    }

    protected getUserCase(name: string): any {
        return this.useCases.get(name);
    }


}