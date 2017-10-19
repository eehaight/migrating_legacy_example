webpackJsonp([0],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registration = __webpack_require__(54);

angular.module('example', ['example.registration']);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registration = undefined;

var _welcome = __webpack_require__(55);

var _login = __webpack_require__(56);

var _signup = __webpack_require__(57);

var _registration = __webpack_require__(58);

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

var registration = exports.registration = angular.module('example.registration', ['ui.router']);

registration.config(['$uiRouterProvider', function ($uiRouter) {
  $uiRouter.trace.enable(1);

  var $urlService = $uiRouter.urlService;
  $urlService.rules.otherwise({ state: 'welcome' });

  var $stateRegistry = $uiRouter.stateRegistry;
  $stateRegistry.register(_registration.welcomeState);
  $stateRegistry.register(_registration.loginState);
  $stateRegistry.register(_registration.signUpState);
}]);

registration.component('welcome', _welcome.welcome);
registration.component('login', _login.login);
registration.component('signup', _signup.signup);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var welcome = exports.welcome = {
  template: "\n    <div class=\"container-fluid\">\n\n      <h3>Migrating from Legacy Front-End to a Modern Framework</h3>\n\n      <p>Welcome to the sample app!</p>\n\n      <button class=\"btn btn-primary\" ui-sref=\"login\">Login</button>\n      <button class=\"btn btn-secondary\" ui-sref=\"signup\">Sign Up</button>\n    </div>"
};

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var login = exports.login = {
  template: "\n    <div class=\"container-fluid\">\n\n      <h3>Login Page</h3>\n\n      <input class=\"form-control\" placeholder=\"User Name\"></input>\n      <input class=\"form-control\" placeholder=\"Password\"></input>\n\n      <button class=\"btn btn-primary\" href=\"/ListPage\">Login</button>\n      <button class=\"btn btn-secondary\" ui-sref=\"welcome\">Back</button>\n    </div>"
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var signup = exports.signup = {
  template: "\n    <div class=\"container-fluid\">\n\n      <h3>Sign Up Page</h3>\n\n      <input class=\"form-control\" placeholder=\"User Name\"></input>\n      <input class=\"form-control\" placeholder=\"Password\"></input>\n\n      <button class=\"btn btn-primary\" ui-sref=\"login\">Submit</button>\n      <button class=\"btn btn-secondary\" ui-sref=\"welcome\">Back</button>\n    </div>"
};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var welcomeState = exports.welcomeState = {
  name: 'welcome',
  url: '/welcome',
  component: 'welcome'
};

var loginState = exports.loginState = {
  name: 'login',
  url: '/login',
  component: 'login'
};

var signUpState = exports.signUpState = {
  name: 'signup',
  url: '/signup',
  component: 'signup'
};

/***/ })

},[53]);