json.playlist do
  json.extract! playlist, :id, :name, :description, :imgUrl
  json.user playlist.user.username

  if playlist.photo.attached?
    json.photo_url url_for(playlist.photo)
  end
end
