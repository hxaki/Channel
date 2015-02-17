Router.route('/', function () {
  this.render('layout-home');
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
