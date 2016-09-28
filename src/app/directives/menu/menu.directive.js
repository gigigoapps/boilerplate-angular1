import template from ".//menu.view.html"

class MenuDirective {
    constructor($state) {
        this.restrict = 'E';
        this.replace = true;
        this.template = template;
        this.$state = $state;
    }
    link(scope, element, attr) {

        scope.go = (route) => {
            this.$state.go(route);
        }


    }
}

MenuDirective.$inject = ['$state'];

export default MenuDirective;
