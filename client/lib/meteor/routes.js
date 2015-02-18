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

Router.route('/c/:_title', function () {
  this.render('profile');
});

Router.route('/c/:_title/submit', function () {
  this.render('profile');
});

// Route.onBeforeAction('dataNotFound');
