app(function(a) {
  var el = $('.messages'),
      tmpl = $('#messageTemplate').html(),
      list = a.list;

  a.on('message.created', function(msg){
    el.removeClass('empty');

    var id = Math.floor(Math.random() * (38 - 1) + 1);
    var html = riot.render(tmpl, {
      name: msg.name,
      content: msg.content,
      avatarUrl: 'http://dev-faces.herokuapp.com/face/72/' + id
    }, true);
    el.prepend(html);

    setTimeout(function(){
      $('.message', el).removeClass('loading').addClass('ready');
    }, 0);
  });
});
