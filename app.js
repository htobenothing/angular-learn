(function () {
	'use strict'

	// [] stand for dependecy
	var app = angular.module('myApp', []);

	app.controller('myCtrl', function ($scope) {
		$scope.food = "";
		$scope.foods = [];
		$scope.message = "";

		$scope.add = function () {
			if ($scope.food) {
				$scope.foods.push($scope.food);
				$scope.food = ""
			} else {
				$scope.message = "Please enter data first"
			}

		}
		$scope.checkFull = function () {
			if ($scope.foods.length <= 3) {
				$scope.message = "Enjoy!"
			} else if ($scope.foods.length > 3) {
				$scope.message = "Too Much"
			}
		}
	})
})();