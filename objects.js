var playlist = {
  My Bloody Valentine: "song1",
  Slowdrive: "song2",

};

function updatePlaylist(Playlist, artistName, songTitle) {
  return Object.assign({}, Playlist, { [artistName]: songTitle});
};
