// riot.route(function(hash){
//   var path  = hash.slice(2);
//   var parts = path.split('/');

//   var resource = parts[0],
//       id       = parts[1],
//       action   = parts[2];
// });


app({
  list: new MessageList(app)
});
