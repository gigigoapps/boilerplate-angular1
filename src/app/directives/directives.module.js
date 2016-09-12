import { HeaderDirective, MenuDirective } from 'directives';

const moduleName = 'app.directives';

angular.module(moduleName, [])

register(moduleName)
    .directive('coreHeader', HeaderDirective)
    .directive('coreMenu', MenuDirective);

export default moduleName;
