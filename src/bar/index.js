let barController = require('./bar.controller.js');

require('./bar.scss');
require('ng-fab-form');

let mod = module.exports = angular.module('bar', []).config([
    'ngFabFormProviderProvider',
    function (ngFabFormProviderProvider) {}]);

mod.controller('BarController', ['ngFabForm', barController]);

module.exports = mod;