angular.module('webMusicApp.controllers', [])

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

.controller('trackDetailCtrl', function($scope, $stateParams, music){
    var $key =    function(){ return String(Object.keys($stateParams)[0]) };  //Se obtiene el key por medio del metodo de Object
    var $value =  function(){ return String($stateParams[$key()]) };          //Se obtiene el value por medio del key

    console.log("DEBUG trackDetailCtrl key: " + $key())
    console.log("DEBUG trackDetailCtrl value: " + $value())
    
    $scope.track =  music.get($key(), $value())
  
    console.log("TRACK")
    console.log($scope.track)
    // create a query for the most recent 25 messages on the server
})

.controller('AccountCtrl', function($scope){})

.controller("SampleCtrl", function($scope, music) {
  // download the data into a local object
  $scope.music = music.all();
  
  console.log("DEBUG All Music: " + $scope.music);
});
