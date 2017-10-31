var novemberSongs = abbeyRoadRecords.filter( function(songs) {
 return songs.month=11;
});

console.log(novemberSongs);

var novemberArtists = novemberSongs.map ( function(songs) {
 return songs.artist;
});

console.log(novemberArtists);
