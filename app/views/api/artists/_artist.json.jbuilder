json.artist do
  json.extract! artist, :id, :name, :bio, :imgUrl

  json.albums do
    @artist.albums.each do |album|
      json.set! album.id do
        json.partial! 'api/albums/album', album: album
      end
    end
  end
end
