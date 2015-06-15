angular.module('Interactive.game.tapdance.info', [
    'ui.router',
    'Interactive.game.tapdance.game'
])

.config(function($stateProvider) {
    $stateProvider
        .state('game-tapdance-info', {
            url: '/tapdance-info',
            views: {
                'main': {
                    controller: 'infoCtrl',
                    templateUrl: 'game/tapdance/tapdance-info.tpl.html'
                }
            },

            data: { pageTitle: 'Tapdance Result' }
        }
    );
})

.controller( 'infoCtrl', function IndexController($scope, game) {

});
