import User from "./User";

class UserValidator {

    validate(user: User): boolean  {
        return false;
    }

    getErrors(user: User): Array<any> {
        return [];
    }
}

class UserValidation {
    public readonly errors: Array<any>;

    constructor(errors: Array<any>){
        this.errors = errors;
    }
}


export { UserValidator, UserValidation }