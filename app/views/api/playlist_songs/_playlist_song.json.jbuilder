json.set! playlist_song.id do
  json.extract! playlist_song, :id, :song_id, :playlist_id
end
