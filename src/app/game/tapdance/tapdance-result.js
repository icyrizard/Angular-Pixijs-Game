angular.module('Interactive.game.tapdance.result', [
    'ui.router',
    'ui.bootstrap'
])

.config(function($stateProvider) {
    $stateProvider
        .state('game-tapdance-result', {
            url: '/tapdance-result',
            views: {
                'main': {
                    controller: 'resultCtrl',
                    templateUrl: 'game/tapdance/tapdance-result.tpl.html'
                }
            },

            data: { pageTitle: 'Tapdance Result' }
        }
    );
})

.controller( 'resultCtrl', function IndexController($scope) {

});
