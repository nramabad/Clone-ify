json.playlist do
  json.partial! "api/playlists/playlist", playlist: @playlist
end

json.songs do
  @playlist.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end
