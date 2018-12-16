json.playlist do
  json.extract! playlist, :id, :name, :description, :imgUrl
  json.user playlist.user.username
end
