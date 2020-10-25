import { UsersRepository } from "../../../modules/user/domain/UsersRepository";
import { Command } from "./Command";
import { Responder } from "./Responder";

class UseCase {

    private userRepository: UsersRepository;

    constructor(userRepository: UsersRepository) {
        this.userRepository = userRepository;
    }

    public async execute(command: Command, responder: Responder): Promise<void> {
        try {
            const users = await this.userRepository.getAll();
            responder.usersFound(users);
        } catch (e) {
            console.log('users not found');
            responder.usersNotFound();
        }
    }

}

export { UseCase };