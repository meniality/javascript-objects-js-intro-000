var playlist = { billyJoel : "piano man"};

function updatePlaylist(Playlist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}
