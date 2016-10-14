import GalleryComponent from './gallery.component';
import GalleryController from './gallery.controller';
import GalleryService from './gallery.service';

const moduleName = 'app.gallery';

angular.module(moduleName, []);

register(moduleName)
    .component('gallery', GalleryComponent)
    .controller('GalleryController', GalleryController)
    .service('GalleryService', GalleryService)

export default moduleName;
