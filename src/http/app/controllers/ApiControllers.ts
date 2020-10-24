import {JsonController} from 'routing-controllers';

@JsonController()
export default ApiControllers {

    private useCases: Map<String, any> = new Map<String, any>();

    constructor() {

        this.useCases.set('allUsers', new AllUsersCase())

    }

}