var playlist = { artist: "song" }

function updatePlaylist(playlist, artistName, songTitle) {
  delete playlist[artistName]
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  playlist[artistName] = songTitle
  return playlist
}