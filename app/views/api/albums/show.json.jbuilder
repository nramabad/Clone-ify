json.album do
  json.extract! @album, :title, :id
  json.artist_name @album.artist.name
  json.artist_id @album.artist.id

  if @album.cover.attached?
    json.cover_url url_for(@album.cover)
  end
end


json.songs do
  @album.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end
