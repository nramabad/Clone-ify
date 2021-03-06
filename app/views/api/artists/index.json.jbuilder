@artists.each do |artist|
  json.artists do
    json.set! artist.id do
      json.partial! "api/artists/artist", artist: artist
    end
  end

  json.albums do
    artist.albums.each do |album|
      json.set! album.id do
        json.extract! album, :id, :title, :year, :genre
        json.artist album.artist.name
        if album.cover.attached?
          json.cover_url url_for(album.cover)
        end
      end
    end
  end

end
