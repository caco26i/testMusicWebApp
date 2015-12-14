angular.module('webMusicApp.services', [])

// .factory('music', function() {
//   // Might use a resource here that returns a JSON array
//   // Some fake testing data
//   var music = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     cover: 'img/ben.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     cover: 'img/max.png'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     cover: 'img/adam.jpg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     cover: 'img/perry.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     cover: 'img/mike.png'
//   }];

//   return {
//     all: function() {
//       return music;
//     },
//     remove: function(track) {
//       music.splice(music.indexOf(track), 1);
//     },
//     get: function(trackId) {
//       for (var i = 0; i < music.length; i++) {
//         if (music[i].id === parseInt(trackId)) {
//           return music[i];
//         }
//       }
//       return null;
//     }
//   };
// })
.factory("music", function($firebaseArray) {
  // the $firebaseArray service properly handles database queries as well

  var ref = new Firebase("https://torrid-heat-7630.firebaseio.com/track");
  return {
    all: function(){ return $firebaseArray(ref); },
    
    remove: function(trackId){ }, // TODO
    
    get: function($key, $value){ 
      console.log("DEBUG music.get: " + "key: " + $key + " value: " + $value);
      
      var query = ref.orderByChild($key).equalTo($value);
      return $firebaseArray(query);;
    },
  };
})
