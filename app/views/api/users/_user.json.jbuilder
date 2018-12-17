json.extract! user, :id, :username, :email

if user.avatar.attached?
  json.avatar_url user.avatar.service_url
end
