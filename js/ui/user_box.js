app(function(a) {
  var el = $('#user-box');
  var tmpl = $('#countsTemplate').html();
  var countsEl = $('#counts', el);
  var count = 0;
  var list = a.list;

  var updateCount = function(n) {
    countsEl.html(riot.render(tmpl, {messagesCount: n}, true));
  };

  a.on('messageCount', function(n){
    updateCount(n);
  });
});

