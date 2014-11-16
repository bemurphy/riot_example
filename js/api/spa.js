function Backend() {
  this.init = function(cb) {
    var data = {
      messages: [
        {name: 'Joe Bob', content: 'foo'},
        {name: 'Sally Sue', content: 'bar'},
        {name: 'Mary Fairy', content: 'fizz'},
        {name: 'John Deer', content: 'buzz'},
      ]
    };

    cb(data);
  };
}

function App(conf) {
  var self         = riot.observable(this);
  var backend      = new Backend();
  self.currentUser = { name: 'John Doe' };

  $.extend(self, conf);

  setTimeout(function(){
    backend.init(function(data){
      self.trigger('ready');

      $.each(data.messages, function(_, msg){
        self.list.add(msg);
      });
    });
  }, 0);

  self.on('ready', function(){
    $('#app').removeClass('loading').addClass('ready');
  });
}

// The ability to split your single-page application (SPA) into loosely-coupled modules
var instance;

top.app = riot.observable(function(arg) {
  // app() --> return instance
  if (!arg) return instance;

  // app(fn) --> add a new module
  if ($.isFunction(arg)) {
    top.app.on("ready", arg);

  // app(conf) --> initialize the application
  } else {
    instance = new App(arg);

    instance.on("ready", function() {
      top.app.trigger("ready", instance);
    });
  }
});
