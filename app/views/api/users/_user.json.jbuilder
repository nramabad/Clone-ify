json.extract! user, :id, :username, :email

if user.avatar.attached?
  json.avatar_url user.avatar.service_url
# else
#   json.avatar_url 'app/assets/images/pf_default.jpg'
# give it a default elsewhere
end
