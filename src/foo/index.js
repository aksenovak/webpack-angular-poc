let fooController = require('./foo.controller.js');

require('./foo.scss');
require('ng-table');

let mod = angular.module('foo', ["ngTable"]);

mod.controller('FooController', [fooController]);

module.exports = mod;