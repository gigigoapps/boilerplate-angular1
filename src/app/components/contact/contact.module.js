import ContactComponent from './contact.component';
import ContactController from './contact.controller';

const moduleName = 'app.contact';

angular.module(moduleName, []);

register(moduleName)
    .component('contact', ContactComponent)
    .controller('ContactController', ContactController)


export default moduleName;
