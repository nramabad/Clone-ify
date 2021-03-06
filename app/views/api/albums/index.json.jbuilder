@albums.each do |album|
  json.albums do
    json.set! album.id do
      json.extract! album, :id, :title, :year, :genre
      json.artist album.artist.name
      if album.cover.attached?
        json.cover_url url_for(album.cover)
      end
    end
  end

  json.songs do
    album.songs.each do |song|
      json.partial! 'api/songs/song', song: song
    end
  end

end
