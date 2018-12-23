# first line is nesting under artist so be sure to account for this
json.extract! artist, :id, :name, :bio

if artist.photo.attached?
  json.photo_url url_for(artist.photo)
end
