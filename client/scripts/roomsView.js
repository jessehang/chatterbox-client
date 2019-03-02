var RoomsView = {

  $button: $('#rooms button'),
  $selector: $('.roomselector'),

  initialize: function() {
    for(let key in Rooms) {
      this.$selector.append(RoomnameView.render(Rooms[key]));
    }
  },

  render: function() {
  }

};


// $chats: $('#chats'),

// initialize: function() {
//   for(let i = 0; i < Messages.results.length; i++) {
//     this.$chats.append(MessageView.render(Messages.results[i]));
//   }
  
// },

// renderMessage: function() {
//   var message = {
//     username: App.username,
//     text :$('#message').val(),
//     roomname: 'n/a'
//   };
//   Parse.create(message);
//   App.initialize();
// }

// };