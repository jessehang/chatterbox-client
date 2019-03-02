var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (let i = 0; i < data.results.length; i++) {
        data.results[i].username = data.results[i].username || 'anon';
        data.results[i].text = data.results[i].text || '';
        Messages.results.push(data.results[i]);
      }
      console.log(data);
      callback();
      MessagesView.initialize();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

// sending a message to server


$('.submit').on('click', function(){
  MessagesView.renderMessage();
})