var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    for(let i = 0; i < Messages.results.length; i++) {
      MessagesView.$chat.append(MessagesView.render(Messages.results[i]));
    }
  },

  render: function() {
  }

};