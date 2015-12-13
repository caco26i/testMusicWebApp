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
  $scope.remove = function(song){
    music.remove(song);
  };
})

.controller('songDetailCtrl', function($scope, $stateParams, music){
  $scope.song = music.get($stateParams.songId);
})

.controller('AccountCtrl', function($scope){});

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");

  // download the data into a local object
  $scope.data = $firebaseObject(ref);

  // putting a console.log here won't work, see below
});
