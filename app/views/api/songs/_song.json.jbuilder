json.set! song.id do
  json.extract! song, :title, :duration, :id
  json.album_title song.album.title
  json.album_id song.album.id
  json.artist_name song.album.artist.name
  json.artist_id song.album.artist.id
  json.image_url song.album.cover.service_url

  if song.audio.attached?
    json.audio_url url_for(song.audio)
  end

  # json.followed current_user.followed_song_ids.include?(song.id)
end
