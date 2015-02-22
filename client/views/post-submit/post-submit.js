Template.postSubmit.events({
  'submit form' : function(event) {
    event.preventDefault();
    var channelName = this.name; //using the data context from router
    var post = {
      image: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val(),
      content: $(event.target).find('[name=content]').val(),
      channel: channelName
    };

    Meteor.call('postInsert', post, function(error, result) {
      if (error) return alert(error.reason);
      //TODO: maybe route to the specific post instead of the channel
      Router.go("channelPage", {_title:channelName});
    })
  }
});
