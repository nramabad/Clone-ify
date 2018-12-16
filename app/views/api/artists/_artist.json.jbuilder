json.artist do
  json.extract! artist, :id, :name, :bio, :imgUrl

  json.albums do
    artist.albums.each do |album|
      json.set! album.id do
        json.partial! 'api/albums/album', album: album
      end
    end
  end

  if artist.photo.attached?
    json.photo_url url_for(artist.photo)
  end
end
