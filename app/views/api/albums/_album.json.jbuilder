json.extract! album, :id, :title, :year, :genre, :artistId, :imgUrl

json.artist album.artist.name

json.songs do
  album.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end
