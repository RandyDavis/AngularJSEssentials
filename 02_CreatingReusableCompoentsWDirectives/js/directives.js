/**
 * Created by randy on 7/24/16.
 */
// Directive via Template
// parking.directive("alert", function () {
//     return {
//         template: "<div class='alert'>" +
//             "<span class='alert-topic'>Something went wrong!</span>" +
//             "<span class='alert-description'>You must inform the plate and the color of the car!</span>" +
//             "</div>"
//     };
// });

// Directive via TemplateURL
parking.directive('alert', function () {
    return {
        restrict: 'E',
        scope: {
          topic: '=topic',
          description:'=description',
          close: '&close'
        },
        templateUrl: "alert.html",
        replace: true
    };
});