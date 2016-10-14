import HomeComponent from './home.component';
import HomeController from './home.controller';


const moduleName = 'app.home';

angular.module(moduleName, []);

register(moduleName)
    .component('home', HomeComponent)
    .controller('HomeController', HomeController)

export default moduleName;
