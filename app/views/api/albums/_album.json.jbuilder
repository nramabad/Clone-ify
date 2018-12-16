json.extract! album, :id, :title, :year, :genre
json.artist album.artist.name


json.songs do
  album.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end

if album.cover.attached?
  json.cover_url url_for(album.cover)
end
