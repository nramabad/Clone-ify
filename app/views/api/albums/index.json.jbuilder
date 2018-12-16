@albums.each do |album|
  json.set! album.id do
    json.partial! "api/albums/album", album: album
    json.artist_name album.artist.name
  end
end
