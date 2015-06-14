angular.module('Interactive.game.tapdance.result', [
    'ui.router',
    'ui.bootstrap',
    'Interactive.game.tapdance.game'
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

.controller( 'resultCtrl', function IndexController($scope, game) {
    console.log(game.clicks);
});
