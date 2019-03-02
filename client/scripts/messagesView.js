var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    for(let i = 0; i < Messages.results.length; i++) {
      this.$chats.append(MessageView.render(Messages.results[i]));
    }
    
  },

  renderMessage: function() {
    var message = {
      username: App.username,
      text :$('#message').text(),
      roomname: 'n/a'
    };
    Parse.create(message);
    App.initialize();
  }

};