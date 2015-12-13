angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope){})

.controller('musicCtrl', function($scope, music){
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e){
  //});

  $scope.music = music.all();
  $scope.remove = function(track){
    music.remove(track);
  };
})

.controller('trackDetailCtrl', function($scope, $stateParams, $firebaseArray){
    var $key = function(){ return Object.keys($stateParams)[0] };
    var $value = function(){ return $stateParams[$key()] };

    console.log($key())
    console.log($value())

    var ref = new Firebase("https://torrid-heat-7630.firebaseio.com/track");
    ref.orderByChild($key()).equalTo($value())
    
    console.log($firebaseArray(ref))
})

.controller('AccountCtrl', function($scope){})

.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://torrid-heat-7630.firebaseio.com/track");

  // download the data into a local object
  $scope.music = $firebaseArray(ref);
  console.log($scope.music)
  topmusic = $firebaseArray(ref);
  // putting a console.log here won't work, see below
});
