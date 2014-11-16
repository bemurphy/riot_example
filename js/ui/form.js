// Present the form
app(function(a) {
  var formEl = $('form'),
      input = $('#message', formEl);

  formEl.on('submit', function(e){
    e.preventDefault();

    var content = input.val();

    input.val('');
    input.blur();
    a.list.add({name: a.currentUser.name, content: content});
  });
});
