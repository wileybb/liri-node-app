
// SPOTIFY_ID=a16981b9bcd147d186a21155322e3cae
// SPOTIFY_SECRET=945c4ae41fd84d858265d0b0d40e7a79

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};