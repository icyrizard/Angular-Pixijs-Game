angular.module('Interactive.game.tapdance', [
    'ui.router',
    'ui.bootstrap',
    'Interactive.game.tapdance.how2play'
])

.config(function($stateProvider) {
    $stateProvider
        .state( 'game-tapdance', {
            url: '/tapdance',
            views: {
                'main': {
                    controller: 'tapdanceCtrl',
                    templateUrl: 'game/tapdance/tapdance-index.tpl.html'
                }
            },

            data: { pageTitle: 'tapdance' }
        }
    );
})

.controller( 'tapdanceCtrl', function IndexController($scope, $modal) {
    //$modal.open(
    //    {
    //        templateUrl:'game/tapdance/tapdance-play-modal.tpl.html'
    //});
})

;
