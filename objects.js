var playlist = {
  "My Bloody Valentine": "song1",
  "Slowdive": "song2",

};

function updatePlaylist(Playlist, artistName, songTitle) {
  return Object.assign({}, Playlist, { [artistName]: songTitle});
};
