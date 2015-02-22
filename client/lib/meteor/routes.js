// NOTE: REREAD THE IRON ROUTER GUIDE ON GITHUB
Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', {
  name: "layoutHome",
  waitOn: function() {
    return Meteor.subscribe('channels');
  }
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/profile/:_id', function () {
  this.render('profile');
});

Router.route('/c/:_title', {
  name: 'channelPage',
  waitOn: function() {
    return Meteor.subscribe("channels");
  },
  data: function() {
    return Channels.findOne({name:this.params._title});
  },
  action: function() {
    this.render("channel");
  }
});

Router.route('/c/:_title/submit', {
  name: 'submit',
  waitOn: function() {
    return Meteor.subscribe("channels");
  },
  data: function() {
    return Channels.findOne({name:this.params._title});
  },
  action: function() {
    this.render('postSubmit');
  }
});

Router.route('/c/:_title/_id', {
  name: "Post",
  waitOn: function() {
    return Meteor.subscribe('posts', this.params._id);
  },
  data: function() {
    return Posts.findOne({_id: this.params._id});
  },
  action: function() {
    this.render('profile');
  }
});

// Route.onBeforeAction('dataNotFound');
