(function() {
  'use strict';

  angular.module('myFirstApp', [])
    .controller('myFirstController', function($scope) {

      $scope.name = 'Dima';
      $scope.totalValue = calculateNumFromString($scope.name);

      $scope.displayNumeric = function() {
        var totalNameValue = 0;
        // $scope.totalValue = totalNameValue;
        $scope.totalValue = calculateNumFromString($scope.name);
      };

      function calculateNumFromString(string) {
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
      }


    });
})();