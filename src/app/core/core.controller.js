import Base from 'app/utils/base';

export default class CoreController extends Base {
    constructor() {
        super(__filename,arguments);

        this.displayMenu = false;

    }
    menuHandler() {
    	this.displayMenu = !this.displayMenu;
    }
}
