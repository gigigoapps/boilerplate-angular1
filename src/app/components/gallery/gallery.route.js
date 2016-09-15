export default function($stateProvider) {

    $stateProvider
        .state('gallery', {
            parent: 'root',
            url: '/gallery',
            views: {
                'app-content@root': {
                    component: 'gallery',
                    resolve: {
                        photos: function (GalleryService) {
                            return GalleryService.getPhotos();
                        }
                    }
                }
            }
        })
}
