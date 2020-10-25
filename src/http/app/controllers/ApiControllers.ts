import {JsonController} from 'routing-controllers';

@JsonController()
export default class ApiControllers {

    private useCases: Map<string, any> = new Map<string, any>();

    constructor() {

        this.useCases.set('allUsers', new AllUsersCase())

    }

}