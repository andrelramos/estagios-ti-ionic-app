angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope){
    $scope.openUrl = function(url) {
        window.open(url, '_blank', 'location=yes');
    }
})

.controller('JobsCtrl', function($scope, $http) {
    //http://storage.scrapinghub.com/items/49316?apikey=a88f05aed82b4473ae3a641048e58257&format=json
    $http.get("https://storage.scrapinghub.com/items/49316/1/87?apikey=a88f05aed82b4473ae3a641048e58257&format=json")
        .success(function(data){
            $scope.jobs = data;
        });

});
