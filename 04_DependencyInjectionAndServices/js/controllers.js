/**
 * Created by randy on 7/24/16.
 */
parking.controller("parkingCtrl", ["$scope", "parkingService", function ($scope, parkingService) {
    $scope.appTitle = "[Packt] Parking";

    $scope.cars = [];
    $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];
    $scope.park = function(car) {
        car.entrance = new Date();
        $scope.cars.push(car);
        delete $scope.car;
    }

        $scope.calculateTicket = function (car) {
            $scope.ticket = parkingService.calculateTicket(car);
        }
}]);