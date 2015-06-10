angular.module('Interactive.game.tapdance.how2play', [
    'ui.router',
    'ui.bootstrap'
])

.config(function($stateProvider) {
    $stateProvider
        .state( 'game-tapdance-how2play', {
            url: '/tapdance-how2-play',
            views: {
                'main': {
                    controller: 'howCtrl',
                    templateUrl: 'game/tapdance/tapdance-how2play.tpl.html'
                }
            },

            data: { pageTitle: 'How to Play' }
        }
    );
})

.controller( 'howCtrl', function IndexController($scope, $modal) {
    //$modal.open(
    //    {
    //        templateUrl:'game/tapdance/tapdance-play-modal.tpl.html'
    //});
})

;
