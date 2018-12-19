json.playlists do
  @playlists.each do |playlist|
    json.partial! "api/playlists/playlist", playlist: playlist
  end
end

json.songs do
  @playlists.each do |playlist|
    playlist.songs.each do |song|
      json.partial! 'api/songs/song', song: song
    end
  end
end

json.playlistSongs do
  @playlists.each do |playlist|
    playlist.playlist_songs.each do |playlist_song|
      json.partial! 'api/playlist_songs/playlist_song', playlist_song: playlist_song
    end
  end
end

# json.users do
#   @playlists.each do |playlist|
#     json.partial! 'api/users/user', user: playlist.user_id
#   end
# end
