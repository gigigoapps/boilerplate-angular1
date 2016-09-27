class HeaderDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.templateUrl = __dirname + '/header.view.html';
        this.scope = {
        	menuHandler: '&'
        }
    }
}

export default HeaderDirective;
