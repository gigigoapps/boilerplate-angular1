import ContactComponent from './contact.component';
import ContactController from './contact.controller';
import ContactRoute from './contact.route';

const moduleName = 'app.contact';

angular.module(moduleName, []);

register(moduleName)
    .component('contact', ContactComponent)
    .controller('ContactController', ContactController)
    .config(ContactRoute)

export default moduleName;
