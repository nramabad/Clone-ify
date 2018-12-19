json.extract! playlist, :id, :title, :song_ids
json.set! 'user' do
  json.extract! playlist.user, :username, :id
end

if playlist.photo.attached?
  json.photo_url url_for(playlist.photo)
end
