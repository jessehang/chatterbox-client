var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    for(let i = 0; i < Messages.results.length; i++) {
      this.$chats.append(MessageView.render(Messages.results[i]));
    }
    
  },

  render: function() {
  }

};