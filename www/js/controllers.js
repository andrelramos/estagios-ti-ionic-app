angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope){
    $scope.openUrl = function(url) {
        window.open(url, '_blank', 'location=yes');
    }

    $scope.goTo = function(location) {
        $location.path(location);
    }
})

.controller('JobsCtrl', function($scope) {});
