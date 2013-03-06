angular.module('listapp', []).
    config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/list.ngt',
        controller: 'ListController'
      }).
      otherwise({
        redirectTo: '/'
    });
  });