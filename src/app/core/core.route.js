export default function($stateProvider, $urlRouterProvider) {

    $stateProvider
        // ** ROOT route of the app ** //
        .state('root', {
            url: '/app',
            abstract: true,
            views: {
                'app-container@': {
                    component: 'core'
                }
            }
        })
        .state('home', {
            parent: 'root',
            url: '/home',
            views: {
                'app-content@root': {
                    component: 'home'
                }
            },
            resolve: {
                data: function () {
                    return 'Hello World';
                }
            }
        })
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
        .state('contact', {
            parent: 'root',
            url: '/contact',
            views: {
                'app-content@root': {
                    component: 'contact'
                }
            },
            resolve: {
                        foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                            let deferred = $q.defer();
                            require.ensure([], function () {
                                let module = require('./../components/contact/contact.module.js');
                                $ocLazyLoad.load({
                                    name: 'app.contact'
                                });
                                deferred.resolve(module);
                            });

                            return deferred.promise;
                        }]
                    }
        });

    /// Default Route
    $urlRouterProvider.otherwise('/app/home');
}
