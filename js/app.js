var profile = require("./profile");
var users = ["chalkers", "joykesten2"];
profile.get("chalkers");
profile.get("joykesten2");
users.forEach(profile.get);
