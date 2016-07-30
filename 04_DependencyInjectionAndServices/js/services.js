/**
 * Created by randy on 7/28/16.
 */
// factory way
// parking.factory("parkingService", function (parkingConfig) {
//     var _calculateTicket = function (car) {
//         var departHour = new Date().getHours();
//         var entranceHour = car.entrance.getHours();
//         var parkingPeriod = departHour = entranceHour;
//         var parkingPrice = parkingPeriod * parkingConfig.parkingRate;
//         return {
//             period: parkingPeriod,
//             price: parkingPrice
//         };
//     };
//
//     return {
//         calculateTicket: _calculateTicket
//     };
// });

// service way
parking.service("parkingService", function (parkingConfig) {
    this.calculateTicket = function (car) {
        var departHour = new Date().getHours();
        var entranceHour = car.entrance.getHours();
        var parkingPeriod = departHour - entranceHour;
        var parkingPrice = parkingPeriod * parkingConfig.parkingRate;
        return {
            period: parkingPeriod,
            price: parkingPrice
        };
    };
});