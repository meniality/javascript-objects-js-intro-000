var playlist = { billyJoel : "piano man"};

function updatePlaylist(playlist, artistName, songTitle){
  object.assign({}, playlist, { [`${artistName}`]: `${songTitle}`})
  return playlist
}
