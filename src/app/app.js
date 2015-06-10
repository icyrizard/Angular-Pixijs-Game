angular.module( 'Interactive', [
    'templates-app',
    'templates-common',
    'ui.router',
    'Interactive.index',
    'Interactive.pixi',
    'Interactive.game',
    'Interactive.game.tapdance'
])

.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tapdance' );
})

.run( function run () {

})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle;
        }
    });
})

;
