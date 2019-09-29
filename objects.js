var playlist = { billyJoel : "piano man"};

function updatePlaylist(playlist, artistName, songTitle){
  return playlist.assign({}, playlist, {[artistName]:songTitle})
}
