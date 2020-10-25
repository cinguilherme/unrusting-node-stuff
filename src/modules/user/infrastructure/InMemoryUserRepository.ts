import User from "../domain/User";
import { UsersRepository } from "../domain/UsersRepository";

class InMemoryUserRepository implements UsersRepository {
    
    getAll(): Promise<User[]> {
        console.log(' in memory repo evoked');
        
        const users: Array<User> = [];
        return new Promise<User[]>(resolve => {
            resolve(users);
        })
    }
    
}

export { InMemoryUserRepository }