(function () {

    angular.module('myApp', [])
        .controller('myCtrl', myCtrl);

    myCtrl.$inject = ['$scope', '$http']

    function myCtrl($scope, $http) {
        $scope.results = [];
        $scope.isSearching = false;

        $scope.search = function () {
            $scope.isSearching = true;
            $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest',
                    params: {
                        method: 'flickr.photos.search',
                        api_key: 'b98be794b23a60323174737f82b0c2c9',
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
    }
})();
