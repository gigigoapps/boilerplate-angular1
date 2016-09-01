import { HeaderDirective } from 'directives';

const moduleName = 'app.directives';

angular.module(moduleName, [])

register(moduleName)
    .directive('coreHeader', HeaderDirective);

export default moduleName;
