
/*
 * Data provider service.
 * Used to retrieve data from external service
 *
 * Style guide:
 * avoid using a variable and instead use chaining with the getter syntax
 * produces more readable code and avoids variable collisions or leaks.
 *
 */

angular
    .module('MainApplicationModule')
    .service('homeService', function($http) {

        function listItems() {
            return $http({
                url: '/items',
                method: "GET"
            });
        }

        return {
          listItems : listItems
        };

    });
