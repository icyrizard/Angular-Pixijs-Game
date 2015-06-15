angular.module('Interactive.game.tapdance.result', [
    'ui.router',
    'ui.bootstrap',
    'Interactive.game.tapdance.game',
    'Interactive.game.tapdance.info'
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
    var points = [0, 3, 5, 7, 10];
    var max_clicks = 600;
    var clicks = game.clicks;

    // cap it to max clicks
    var calc_clicks = clicks > max_clicks ? max_clicks: clicks;

    var ratio = points.length / (max_clicks / calc_clicks);
    var result = points[Math.ceil(ratio) - 1];

    console.log(clicks);
    console.log(ratio);

    $scope.points = result;
    $scope.clicks = clicks;
});
