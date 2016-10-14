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
            },
            resolve: {
                        foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                            let deferred = $q.defer();
                            require.ensure([], function () {
                                let module = require('./../components/gallery/gallery.module.js');
                                $ocLazyLoad.load({
                                    name: 'app.gallery'
                                });
                                deferred.resolve(module);
                            });

                            return deferred.promise;
                        }]
                    }
        })
}
