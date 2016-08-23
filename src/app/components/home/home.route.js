export default function($stateProvider) {

    $stateProvider
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
}
