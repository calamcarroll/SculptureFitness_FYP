var app = angular.module('SculptureFitnessRoutes', ['ngRoute']);
app.service('userUpdateService', function(){
    var userUpdateService = {
        username:'',
        password:'',
        email:'',
        weight:'',
        height:'',
        bodyFat:'',
        gymOfChoice:'',
        userId: ''
    };
    return userUpdateService;
});
app.config(function($routeProvider,$locationProvider){

    $routeProvider
        .when('/gymMarketplace',{
            templateUrl: 'app/views/pages/trainers/gymMarketplace.html',
            controller:'gymCtrl',
            controllerAs: 'gym'
        })
        .when('/findGym',{
            templateUrl: 'app/views/pages/trainers/findGym.html'
        })
        .when('/trainerSection',{
            templateUrl: 'app/views/pages/trainers/trainerSection.html'
        })

        .when('/gyms_trainers',{
            templateUrl: 'app/views/pages/trainers/gyms_trainers.html'
        })
        .when('/gyms',{
            templateUrl: 'app/views/pages/trainers/gyms.html',
            controller:'gymCtrl',
            controllerAs: 'gym'
        })
        .when('/preUpdateProfileInfo',{
        templateUrl: 'app/views/pages/users/preUpdateProfileInfo.html'
        })
        .when('/trainerMarketplace',{
            templateUrl: 'app/views/pages/trainers/trainerMarketplace.html'
        })
        .when('/',{
            templateUrl: 'app/views/pages/general/home.html'
        })
        .when('/marketplace',{
            templateUrl: 'app/views/pages/trainers/marketplace.html'
        })
        .when('/trainerLogin',{
            templateUrl: 'app/views/pages/trainers/trainerLogin.html'
        })
        .when('/about',{
            templateUrl: 'app/views/pages/general/about.html'
        })
        .when('/updateProfileInfo',{
            templateUrl: 'app/views/pages/users/updateProfileInfo.html'
        })
        .when('/register',{
            templateUrl: 'app/views/pages/users/register.html',
            controller:'registerController',
            controllerAs: 'register'
        })
        .when('/clientLogin',{
            templateUrl: 'app/views/pages/users/clientLogin.html'
        })
        .when('/profile',{
            templateUrl:'app/views/pages/users/profile.html'
        })
        .when('/facebook/:token', {
            templateUrl: 'app/views/pages/users/profile.html',
            controller: 'facebookCtrl',
            controllerAs: 'facebook'
        })
        .when('/facebookerror',{
            templateUrl: 'app/views/pages/users/clientLogin.html',
            controller: 'facebookCtrl',
            controllerAs: 'facebook',
            authenticated: false
        })

        .when('/twitter/:token',{
            templateUrl: 'app/views/pages/users/profile.html',
            controller: 'twitterCtrl',
            controllerAs: 'twitter',
            authenticated: false
        })
        .when('/twittererror',{
            templateUrl: 'app/views/pages/users/clientLogin.html',
            controller: 'twitterCtrl',
            controllerAs: 'twitter',
            authenticated: false
        })
        .when('/google/:token',{
            templateUrl: 'app/views/pages/users/profile.html',
            controller: 'twitterCtrl',
            controllerAs: 'twitter',
            authenticated: false
        })
        .when('/googleerror',{
            templateUrl: 'app/views/pages/users/clientLogin.html',
            controller: 'googleCtrl',
            controllerAs: 'google',
            authenticated: false
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});




