const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  const playLists = library.playlists;
  for (const playList of Object.keys(playLists)) {
    console.log(`${playList}: ${playLists[playList]['name']} - ${playLists[playList]['tracks'].length} tracks`);
  }
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  const tracks = library.tracks;
  for (const track of Object.keys(tracks)) {
    console.log(
      `${track}: ${tracks[track]['name']} by ${tracks[track]['artist']} (${tracks[track]['album']})`
    );
  }
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  // loop through playlists in library to find correct playlist based on provided ID
  const playLists = library.playlists;
  const tracks = library.tracks;
  for (const playList of Object.keys(playLists)) {
    // check to see if ID is in associated with the playlist
    if (playlistId === playLists[playList]['id']){
      console.log(`${playlistId}: ${playLists[playList]['name']} - ${playLists[playList]['tracks'].length} tracks`);
      //loop through track array of playlist and print the associated track
      for (const track of playLists[playList]['tracks']) {
        console.log(`${track}: ${tracks[track]['name']} by ${tracks[track]['artist']} (${tracks[track]['album']})`)
      }
    }
  }
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const playlist = library.playlists[playlistId];
  playlist.tracks.push(trackId);
  console.log(playlist);
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  const trackId = generateUid();
  library.tracks[`${trackId}`] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  }
  console.log(library.tracks);
}


// adds a playlist to the library
const addPlaylist = function(name) {
  const playlistId = generateUid();
  library.playlists[`${playlistId}`] = {
    id: playlistId,
    name: name,
    tracks: []
  }
  console.log(library.playlists);
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}

printPlaylists();
printTracks();
printPlaylist("p01");
addTrackToPlaylist("t03", "p01");
addTrack("Music Library", "Johnny Appleseed", "2020 Album");
addPlaylist("New Playlist");