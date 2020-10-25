import User from "./User";

export interface UsersRepository {

    getAll(): Promise<Array<User>>;

}