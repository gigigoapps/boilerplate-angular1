import GalleryComponent from './gallery.component';
import GalleryController from './gallery.controller';
import GalleryService from './gallery.service';
import GalleryRoute from './gallery.route';

const moduleName = 'app.gallery';

angular.module(moduleName, []);

register(moduleName)
    .component('gallery', GalleryComponent)
    .controller('GalleryController', GalleryController)
    .service('GalleryService', GalleryService)
    .config(GalleryRoute)

export default moduleName;
