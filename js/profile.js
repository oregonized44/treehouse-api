// Problem : We need a simple way to look at a users badge count and a Javascript points
// Solution: Use Node.js to conntct to Treehouse API to get profile information to print out
var http = require("http");
//Print out message
function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badges and " + points + " points in Javascript";
    console.log(message);
}
//Print out error messages
function printError(error){
  console.error(error.message);
}
function get(username){
  // Connect to the API URL (http://teamtreehouse.come/username.json)
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
    var responseBody = "";
    console.dir(response.statusCode);
    // Read the data
    response.on('data', function(dataChunk){
      responseBody += dataChunk;
      console.log('BODY:' + dataChunk);
    });

    response.on("end", function(){
      if(response.statusCode === 200) {
        try {
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data
          printMessage(username, profile.badges.length, profile.points.Javascript);
        } catch(error){
          //Parse error
          printError(error);
        }
      }else{
      //STatuscode error
      printError({messge: "there was an error getting the profile " + username });

      }
    });
  });
  //Connections Error
  request.on("error", printError);
}
printMessage("Chalkers",1000, 20000000);
module.exports.get = get;
