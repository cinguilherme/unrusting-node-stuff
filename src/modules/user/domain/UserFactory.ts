import { UserValidator, UserValidation } from "./UserValidator";
import User from './User';

export class UserFactory {

    public static create(data: any): User | UserValidation {
        const {name, email} = data;
        const user = new User(name, email);
        const validator = new UserValidator();

        if(!validator.validate(user)) {
            const errors = validator.getErrors(user);
            return new UserValidation(errors);
        }
        return user;
       
    }
    
}