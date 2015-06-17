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

.controller( 'resultCtrl', function IndexController($scope, game, $state) {
    var transition_time = Date.now();
    $scope.result_popup = {};

    var result_info = {
        0: "",
        3: "You didn't use that much water in the production of your jeans, which saved some natural resources.",
        5: "You didn't use a lot of water in the production of your jeans, which saved some natural resources.",
        7: "You almost didn't use any water in the production of your jeans, which saved a lot of natural resources.",
        10: "You didn't use any water in the production of your jeans, which saved a lot of natural resources."
    };


    $scope.result_popup.click = function(event) {
        // may only transition after 3seconds
        if ((Date.now() - transition_time) > 3000) {
            $state.go('game-tapdance-info');
        }
    };

    var points = [0, 3, 5, 7, 10];
    var max_clicks = 160;
    var clicks = game.clicks;

    // cap it to max clicks
    var calc_clicks = clicks > max_clicks ? max_clicks: clicks;

    var ratio = points.length / (max_clicks / calc_clicks);
    var result = points[Math.ceil(ratio) - 1];

    $scope.points = result;
    $scope.clicks = clicks;
    $scope.result_info = result_info[result];

    game.played = 0;
    game.clicks = 0;
});
