import User from "../domain/User";
import { UsersRepository } from "../domain/UsersRepository";

class InMemoryUserRepository implements UsersRepository {
    
    getAll(): Promise<User[]> {
        const users: Array<User> = [];
        return new Promise<User[]>(resolve => {
            resolve(users);
        })
    }
    
}

export { InMemoryUserRepository }