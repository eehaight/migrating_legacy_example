// 'use strict';
//
// var angular = require('angular');
//
// angular.module('example.registration', [
//   'ui.router'
// ])
// .config(function($stateProvider, $urlRouterProvider) {
//
//   $stateProvider
//   .state({
//     name: 'login',
//     url: '/login',
//     template: '<login></login>'
//   })
//   .state({
//     name: 'signup',
//     url: '/signup',
//     template: 'This is the sign up page!'
//   });
//
//   $urlRouterProvider.when('','/login');
// });
//
// require('./login');

import {welcome} from "./welcome.template";
import {login} from "./login.template";
import {signup} from "./signup.template";
import {welcomeState,loginState,signUpState} from "./registration.states"

export const registration = angular.module('example.registration', [
  'ui.router'
]);

registration.config(['$uiRouterProvider', function($uiRouter) {
  $uiRouter.trace.enable(1);

  const $urlService = $uiRouter.urlService;
  $urlService.rules.otherwise({ state: 'welcome' });

  const $stateRegistry = $uiRouter.stateRegistry;
  $stateRegistry.register(welcomeState);
  $stateRegistry.register(loginState);
  $stateRegistry.register(signUpState);
}]);

registration.component('welcome', welcome);
registration.component('login', login);
registration.component('signup', signup);
