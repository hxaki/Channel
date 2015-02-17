Template.header.events({
  'click .sign-out': function(event) {
    Meteor.logout();
  }
});
