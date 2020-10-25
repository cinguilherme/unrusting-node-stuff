import User from '../../../modules/user/domain/User';


export interface Responder {
    usersFound(users: Array<User>): void;
    usersNotFound(): void;
}