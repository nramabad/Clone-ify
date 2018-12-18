# first line is nesting under artist so be sure to account for this
json.artist do
  json.extract! artist, :id, :name, :bio

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
