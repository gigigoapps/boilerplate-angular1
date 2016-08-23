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

    /// Default Route
    $urlRouterProvider.otherwise('/app/home');
}
