Package.describe({
  name: "bitomule:relativeformatterjs",
  summary: "",
  version: "0.1.0",
  git: "https://github.com/bitomule/relativeformatterjs"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["grigio:babel"], ["client", "server"]);

  api.addFiles("lib/relativeformatter.es6.js", ["client","server"]);
  api.export('RelativeFormatter', ["client","server"]);
});

    
Package.onTest(function (api) {
    api.use("tinytest");
    api.use(["grigio:babel","bitomule:relativeformatterjs"], ["client", "server"]);
    
    api.addFiles("tests/tests.js", ["client","server"]);
});    
  
  