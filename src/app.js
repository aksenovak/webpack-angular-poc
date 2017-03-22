require('./core');

require('angular');
require('angular-ui-router/release/angular-ui-router');
require('oclazyload/dist/ocLazyLoad');

let app = angular.module('app', [
    'ui.router',
    'oc.lazyLoad'
]);

angular.module('app')
    .config([
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider) {
            $stateProvider
                .state('foo', {
                    url: '/foo',
                    template: require('./foo/foo.html'),
                    controller: 'FooController',
                    controllerAs: 'vm',
                    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                        let deferred = $q.defer();

                        require.ensure([], function (require) {
                            let mod = require('./foo');
                            $ocLazyLoad.load({
                                name: mod.name,
                            });

                            deferred.resolve(mod.controller);
                        });

                        return deferred.promise;
                    }]
                })
                .state('bar', {
                    url: '/bar',
                    template: require('./bar/bar.html'),
                    controller: 'BarController',
                    controllerAs: 'vm',
                    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                        let deferred = $q.defer();

                        require.ensure([], function (require) {
                            let mod = require('./bar');
                            $ocLazyLoad.load({
                                name: mod.name,
                            });

                            deferred.resolve(mod.controller);
                        });

                        return deferred.promise;
                    }]
                });

            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/foo');
        }])
    .factory("IssueService", ["$resource", function($resource) {
        return $resource("https://api.github.com/repos/:username/:repo/issues", {
            state: "open"
        }, {
            query: {
                method: "GET",
                isArray: true
            }
        });
    }]);