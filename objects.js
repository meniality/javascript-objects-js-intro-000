var playlist = { billyJoel : "piano man"};

function updatePlaylist(Playlist, artistName, songTitle) {
  return Object.assign({}, Playlist, { [artistName]: songTitle});
}
