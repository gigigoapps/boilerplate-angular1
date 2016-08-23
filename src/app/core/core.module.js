import CoreComponent from './core.component';
import CoreController from './core.controller';
import CoreRoute from './core.route';

const moduleName = 'app.core';

angular.module(moduleName, []);

register(moduleName)
    .component('core', CoreComponent)
    .controller('CoreController', CoreController)
    .config(CoreRoute)

export default moduleName;
