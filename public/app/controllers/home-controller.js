angular
    .module('MainApplicationModule')
    .controller('HomeController', ['$scope', 'homeService',
        function($scope, homeService) {

          $scope.loadedItems = [];
          $scope.selectedItem = null;

          function loadItems(response) {
            if (response.data.success) {
              $scope.loadedItems = response.data.content;
              $scope.selectedItem = $scope.loadedItems[0];
            }
          }

          function initialize() {
            homeService.listItems().then(loadItems);
          }

          initialize();

          /*
           * How do you unit test private methods?
           * Expose them via a "test" property
           */

          $scope['__test__'] = {
              loadItems: loadItems
          }

        }]);
