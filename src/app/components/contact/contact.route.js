export default function($stateProvider) {

    $stateProvider
        .state('contact', {
            parent: 'root',
            url: '/contact',
            views: {
                'app-content@root': {
                    component: 'contact'
                }
            }
        })
}
