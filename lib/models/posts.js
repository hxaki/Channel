Meteor.methods({
  postInsert: function(postAttributes) {
    //fuck validation (for now lel)
    var postId = Posts.insert(postAttributes);
    return {
      _id: postId
    }
  }
});
