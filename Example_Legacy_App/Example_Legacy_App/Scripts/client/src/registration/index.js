
import {welcome} from "./welcome.template";
import {login} from "./login.template";
import {signup} from "./signup.template";
import {welcomeState,loginState,signUpState} from "./registration.states"

export const registration = angular.module('example.registration', [
  'ui.router',
  'example'
]);

registration.config(['$uiRouterProvider', function($uiRouter) {
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
