import HomeComponent from './home.component';
import HomeController from './home.controller';
import HomeRoute from './home.route';

const moduleName = 'app.home';

angular.module(moduleName, []);

register(moduleName)
    .component('home', HomeComponent)
    .controller('HomeController', HomeController)
    .config(HomeRoute)

export default moduleName;
