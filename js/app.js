angular.module('myApp', [])
    .controller('flickrController', flickrController);

flickrController.$inject = ['$scope', '$http']

function flickrController($scope, $http) {
    $scope.results = [];
    $scope.isSearching = false;

    $scope.search = function () {
        $scope.submit = function () {
            $scope.isSearching = true;
        }

        $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.search',
                    api_key: 'ed26d792481385000b27a4fc6bc2a465',
                    text: $scope.searchTerm,
                    format: 'json',
                    nojsoncallback: 1
                }
            }).success(function (data) {
                $scope.results = data;
                $scope.isSearching = false;
            }),
            function (error) {
                console.log('error!');
                $scope.isSearching = true;
            };
    };
};
