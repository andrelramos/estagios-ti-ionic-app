angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope){
    $scope.openUrl = function(url) {
        window.open(url, '_blank', 'location=yes');
    }
})

.controller('JobsCtrl', function($scope) {});
