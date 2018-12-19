json.extract! playlist, :id, :title, :description, :user_id

if playlist.photo.attached?
  json.cover_url url_for(playlist.photo)
end
