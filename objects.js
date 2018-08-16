var playlist = { artist: "song" }

function updatePlayList(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}