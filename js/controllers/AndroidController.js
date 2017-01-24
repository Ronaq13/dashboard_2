(function() {
    angular.module('verticalTabs')
        .controller('AndroidController', ['$scope', function($scope) {
            $scope.isSelectedItem = 1;
            $scope.setSelectedItem = function(itemNumber) {
                $scope.isSelectedItem = itemNumber;
            }

        }]);
})();