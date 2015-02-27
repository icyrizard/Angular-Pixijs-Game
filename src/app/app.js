angular.module( 'Interactive', [
    'templates-app',
    'templates-common',
    'Interactive.index',
    'ui.router'
])

.config( function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/index' );
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

