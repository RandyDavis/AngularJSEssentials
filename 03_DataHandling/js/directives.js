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
// parking.directive('alert', function () {
//     return {
//         restrict: 'E',
//         scope: {
//           topic: '@'
//         },
//         templateUrl: "alert.html",
//         replace: true,
//         transclude: true
//     };
// });

// Directive via Link
// parking.directive("accordionItem", function () {
//     return {
//         templateUrl: "accordionItem.html",
//         restrict: "E",
//         scope: {
//             title: "@"
//         },
//         transclude: true,
//         link: function (scope, element, attrs, ctrl, transcludeFn) {
//             element.bind("click", function () {
//                 scope.$apply(function () {
//                     scope.active = !scope.active;
//                 });
//             });
//         }
//     };
// });

// // Directive via Require
// parking.directive("accordion", function () {
//     return {
//         template: "<div ng-transclude></div>",
//     restrict: "E",
//     transclude: true
//     };
// });
//
// parking.directive('accordionItem', function () {
//     return {
//         templateUrl: "accordionItem.html",
//         restrict: "E",
//         scope: {
//             title: "@"
//         },
//         transclude: true,
//         require: "^accordion",
//         link: function (scope, element, attrs, ctrl, transcludeFn) {
//             element.bind("click", function () {
//                 scope.$apply(function () {
//                     scope.active = !scope.active;
//                 });
//             });
//         }
//     };
// });

// Directive via Link - w/updated controller
parking.directive("accordion", function () {
    return {
        template: "<div ng-transclude></div>",
        restrict: "E",
        transclude: true,
        controller: function ($scope, $element, $attrs, $transclude) {
            var accordionItems = [];

            var addAccordionItem = function (accordionScope) {
                accordionItems.push(accordionScope);
            };

            var closeAll = function () {
                angular.forEach(accordionItems, function (accordionScope) {
                    accordionScope.active = false;
                });
            };

            return {
                addAccordionItem: addAccordionItem,
                closeAll: closeAll
            };
        }
    };
});

parking.directive('accordionItem', function () {
    return {
        templateUrl: "accordionItem.html",
        restrict: "E",
        scope: {
            title: "@"
        },
        transclude: true,
        require: "^accordion",
        link: function (scope, element, attrs, ctrl, transcludeFn) {
            element.bind("click", function () {
                ctrl.closeAll();
                scope.$apply(function () {
                    scope.active = !scope.active;
                });
            });
        }
    };
});