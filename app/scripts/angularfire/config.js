angular.module('firebase.config', [])
  .constant('FBURL', 'https://blinding-heat-8778.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','twitter'])

  .constant('loginRedirectPath', '/login');
