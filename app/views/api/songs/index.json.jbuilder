@songs.each do |song|
  json.partial! "api/songs/song", song: song
end
