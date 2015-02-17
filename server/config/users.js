Accounts.onCreateUser(function(options, user) {
  // We still want the default hook's 'profile' behavior.
  user.profile = {firstName: "Ray", role:"leader"};
  return user;
});
