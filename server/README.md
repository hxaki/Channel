## Server-side code
```
/api - REST API (optional) 
/config accounts.js = Accounts.config(), etc. users.js = Accounts.onCreateUser(), etc. 
/helpers = Server-side helper functions 
/lib = What should get loaded first *settings.js = Load into Meteor.settings packages.js = Instantiate your NPM modules startup.js = Run on server startup 
/models = Server-only Meteor.methods 
/publish - Individual files for the type of data - ex: user.js to publish UserModel data
```
