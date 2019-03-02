var MessagesView = {

  $chats: $('#chats'),
  // appends all messages to chats
  initialize: function() {
    for(let i = 0; i < Messages.results.length; i++) {
      this.$chats.append(MessageView.render(Messages.results[i]));
    }
    
  },
  // creates template to pass to server
  renderMessage: function() {
    var message = {
      username: App.username,
      text :$('#message').val(),
      roomname: 'n/a'
    };
    Parse.create(message);
    App.initialize();
  }

};