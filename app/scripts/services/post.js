'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://torrid-inferno-6468.firebaseio.com/posts/:id.json');
});
