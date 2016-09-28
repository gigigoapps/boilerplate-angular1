import template from './header.view.html'

class HeaderDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.template = template;
    }
}

export default HeaderDirective;
