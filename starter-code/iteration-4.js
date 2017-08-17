
//TODO-: CLEAN THIS UP!!!!!

 function novemberArtists() {

   var artists = _.filter(abbeyRoadRecords, {

     'month': 11

   });

   var artistCounted = countArtist(artists);

   var artistWithMoreSingles = getTheMax(artistCounted);

   console.log("MAXIM: " + artistWithMoreSingles);

}

function getTheMax(artist) {

  var currentMax = 0;
  var currentArtist = "";

  _.mapKeys(artist, function(value, key) {

      if (value  > currentMax) {

          currentMax = value;
          currentArtist = key;
      }
  });

  return currentArtist;

}

function getBestArtist() {

  var allArtist = countArtist(abbeyRoadRecords);

  var bestArtist = getTheMax(allArtist);

  return bestArtist;

}

function countArtist(artist) {

  var count = {};

  _.map(artist, function(object) {
    _.mapKeys(object, function(value, key) {

      if (key === "artist"){

        if (_.has(count,value)) {

          count[value] += 1;

        }
        else {

          count[value] = 1;
        }
      }
    });
  });

  return count;

}


console.log("The Best Artist: " + getBestArtist());
novemberArtists();

function theLastBeatlesSong() {

  var beatles = getJustBeatles();
  var maxYear = 0;
  var maxMonth = 0;
  var currentSong = "";
  _.map(beatles, function(object) {
    _.mapKeys(object, function(value, key) {

      if (key === "year"){
          if (value >= maxYear){
            if (value === maxYear){
              if (object.month > maxMonth) {

                maxYear = value;
                maxMonth = object.month;
                currentSong = object.song;

              }

            } else {

              maxYear = value;
              maxMonth = object.month;
              currentSong = object.song;

            }
          }
      }
    });
});

  console.log(beatles);
  console.log(currentSong);

}

function getJustBeatles() {

  var count = [];

  _.map(abbeyRoadRecords, function(object) {
    _.mapKeys(object, function(value, key) {

      if (key === "artist" && (value === "The Beatles" || _.includes(value, "The Beatles"))){

          count.push(object);

      }

    });
});

  return count;


}

function sixtiesSong() {

  var maxYear = 0;
  var maxMonth = 0;
  var currentSong = "";
  _.map(abbeyRoadRecords, function(object) {
    _.mapKeys(object, function(value, key) {

      if (key === "year"){
          if (value >= maxYear){
            if (value === maxYear){
              if (object.month > maxMonth) {

                maxYear = value;
                maxMonth = object.month;
                currentSong = object.song;

              }

            } else {

              maxYear = value;
              maxMonth = object.month;
              currentSong = object.song;

            }
          }
      }
    });
});

  console.log(currentSong);

}


theLastBeatlesSong();

sixtiesSong();
