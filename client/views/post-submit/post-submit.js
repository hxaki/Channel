Template.postSubmit.events({
  'submit form' : function(event) {
    event.preventDefault();
    var post = {
      image: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val()
    };
    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});
