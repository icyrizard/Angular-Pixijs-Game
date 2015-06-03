angular.module('Interactive.game', [
    'Interactive.pixi',
    'ui.router'
])

.config(function($stateProvider) {
    $stateProvider.state( 'game', {
        url: '/game',
        views: {
            'main': {
                controller: 'IndexCtrl',
                templateUrl: 'game/index.tpl.html'
            }
        },

        data: { pageTitle: 'Game' }
    });
})

.controller( 'IndexCtrl', function IndexController($scope) {
    console.log('game-index');
})

;
