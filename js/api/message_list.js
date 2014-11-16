function MessageList(app) {
  var self     = riot.observable(this);
  var messages = [];

  self.add = function(msg) {
    messages.push(msg);
    app().trigger('message.created', msg);
    app().trigger('messageCount', messages.length);
  };

  self.count = function() {
    return messages.length;
  };
}

