export default function($stateProvider) {

    $stateProvider
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
        })
}
