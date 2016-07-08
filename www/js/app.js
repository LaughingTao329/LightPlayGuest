// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.tabsController', 'starter.homeController', 'starter.turnplateController','starter.messageController','starter.discoverController','starter.myController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// 底部tabs切换
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tab',
      templateUrl: './tpls/tabs.html',
      controller: 'tabController'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: './tpls/home.html'
        }
      }
    })
    .state('tabs.turnplate', {
      url: '/turnplate',
      views: {
        'turnplate-tab': {
          templateUrl: './tpls/turnplate.html',
          // controller: 'listController'
        }
      }
    })
    .state('tabs.message', {
      url: '/message',
      views: {
        'message-tab': {
          templateUrl: './tpls/message.html',
          // controller: 'listController'
        }
      }
    })
    .state('tabs.discover', {
      url: '/discover',
      views: {
        'discover-tab': {
          templateUrl: './tpls/discover.html',
          // controller: 'listController'
        }
      }
    })
    .state('tabs.my', {
      url: '/my',
      views: {
        'my-tab': {
          templateUrl: './tpls/my.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab');
})
