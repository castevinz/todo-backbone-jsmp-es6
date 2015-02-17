System.config({
  "baseURL": "/",
  "transpiler": "6to5",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "Backbone.localStorage": "github:jeromegn/Backbone.localStorage@1.1.16",
    "backbone": "github:jashkenas/backbone@1.1.2",
    "jquery": "github:components/jquery@2.1.3",
    "underscore": "github:jashkenas/underscore@1.7.0"
  }
});

