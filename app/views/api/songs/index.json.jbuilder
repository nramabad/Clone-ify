@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :albumId
  end
end
