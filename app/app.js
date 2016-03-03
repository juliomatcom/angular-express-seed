'use strict';

var app = angular.module('MyApp', [])

app.controller('main', ['$scope', function ($scope){
  $scope.name = 'angular-express-seed'
  $scope.view = 'views/1.html'
}])
