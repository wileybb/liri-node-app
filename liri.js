// require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);

var liriSearch = process.argv.slice(3).join(" ");
// * `concert-this`
if (process.argv[2] === "concert-this"){
    console.log("concert");
    var bandsintown = require('bandsintown')(APP_ID);
 
    bandsintown
    .getArtistEventList('Skrillex')
    .then(function(events) {
    console.log(events);
    });
};

// * `spotify-this-song`
// var spotify = new Spotify(keys.spotify);

if (process.argv[2] === "spotify-this-song"){
    // console.log("spotify");

    // var Spotify = require('node-spotify-api');

    // // var spotify = new Spotify(keys.spotify);
    
    // var spotify = new Spotify({
    //     id: "a16981b9bcd147d186a21155322e3cae",
    //     secret: "945c4ae41fd84d858265d0b0d40e7a79"
    // });
 
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
 
        console.log(data); 
    });
};

// * `movie-this` ----------------------------------------------------

if (process.argv[2] === "movie-this"){
    // console.log("movie");
//     // Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
    var axios = require("axios");

// // Store all of the arguments in an array
    var nodeArgs = process.argv;

// // Create an empty variable for holding the movie name
    var movieName = "";

// // Loop through all the words in the node argument
// // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {
        if(i ===(nodeArgs.length - 1)){
            movieName += nodeArgs[i];
        } else {
            movieName += nodeArgs[i] + "+";
        }
    }

    // console.log(movieName + " is the movie name");

// // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";

// // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
            // console.log(response);

            // * Title of the movie.
            console.log("Title: " + response.data.Title);

            // * Year the movie came out.
            console.log("Release Year: " + response.data.Year);

            // * IMDB Rating of the movie.
            console.log("Rating: " + response.data.Rated);

            // * Rotten Tomatoes Rating of the movie.
            console.log("Rotten Tomatoes Rating: " + response.data.tomatoMeter);

            // * Country where the movie was produced.
            console.log("Country: " + response.data.Country);

            // * Language of the movie.
            console.log("Language: " + response.data.Language);

            // * Plot of the movie.
            console.log("Plot: " + response.data.Plot);

            // * Actors in the movie.
            console.log("Actors: " + response.data.Actors);
        }
    );

};

// * `do-what-it-says`
// if (process.argv[2] === "do-what-it-says"){
//     console.log("do it");
// };