angular.module('Interactive.index', [
    'Interactive.pixi',
    'ui.router'
])

.config(function($stateProvider) {
    $stateProvider.state( 'index', {
        url: '/index',
        views: {
            'main': {
                controller: 'IndexCtrl',
                templateUrl: 'index/index.tpl.html'
            }
        },

        data: {pageTitle: 'index'}
    });
})

.controller( 'IndexCtrl', function IndexController($scope) {
})

;
