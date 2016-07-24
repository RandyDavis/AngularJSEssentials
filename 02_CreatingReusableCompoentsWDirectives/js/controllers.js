/**
 * Created by randy on 7/24/16.
 */
parking.controller("parkingCtrl", ["$scope", function ($scope) {
    $scope.appTitle = "[Packt] Parking";
    $scope.alertTopic = "Something went wrong!";
    $scope.alertDescription = "You must inform the plate and the color of the car!";
    $scope.cars = [];
    $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];
    $scope.park = function(car) {
        car.entrance = new Date();
        $scope.cars.push(car);
        delete $scope.car;
    }

}])